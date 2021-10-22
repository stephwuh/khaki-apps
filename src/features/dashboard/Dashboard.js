import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, makeStyles } from "@material-ui/core";
import apiClient from "../../services/apiClient";
import jobAppDetail from "../../services/jobAppDetail";
import dashboard from "./dashboard.module.css";
import JobAppDetail from "../jobAppDetail/JobAppDetail";
import sortFunction from "../../services/sort";
import "../.././App.css";

const Dashboard = () => {
  const [jobAppState, setJobAppState] = useState([]);
  const [jobDetailState, setJobDetailState] = useState({ open: false });

  //state related to dialog box
  const [jobDetailFormState, setJobDetailFormState] = useState(null);

  const [searchState, setSearchState] = useState("");
  const [filteredJobAppState, setFilteredJobAppState] = useState([]);

  useEffect(() => {
    const jobAppDataPromise = apiClient.getApps();

    jobAppDataPromise.then((jobAppData) => {
      setJobAppState(jobAppData);
      setFilteredJobAppState(jobAppData);
    });
  }, []);

  /* 
    the dialog service exposes events with whether the dialog is closed or opened.
    so we can now use an useEffect to subscript to the events and then update the state
  */

  useEffect(() => {
    const subscription = jobAppDetail.eventsStream.subscribe((state) =>
      setJobDetailState(state)
    );

    return () => subscription.unsubscribe();
  }, []);

  let jobApps = filteredJobAppState.map((jobApp, index) => {
    return (
      <div
        data-testid="job-app"
        className="row row-cols-5 my-3 gx-0 border rounded bg-white job-overview"
        key={index}
        onClick={() => {
          setJobDetailFormState("update");
          jobAppDetail.open(jobApp);
        }}
      >
        <div
          data-testid="company-name"
          className="col text-center my-auto py-5"
        >
          <h5>Company</h5>
          <p className="wrap-content">{jobApp.company}</p>
        </div>
        <div data-testid="job-title" className="col text-center my-auto">
          <h5>Job Title</h5>
          <p className="wrap-content">{jobApp.jobTitle}</p>
        </div>
        <div data-testid="location" className="col text-center my-auto">
          <h5>Location</h5>
          <p className="wrap-content">{jobApp.location}</p>
        </div>
        <div data-testid="salary" className="col text-center my-auto">
          <h5>Salary</h5>
          <p className="wrap-content">{jobApp.salary}</p>
        </div>
        <div data-testid="status" className="col text-center my-auto">
          <h5>Status</h5>
          <p className="wrap-content">{jobApp.status}</p>
        </div>
      </div>
    );
  });

  const handleSearchOnChange = (e) => {
    setSearchState(e.target.value);

    let searchValue = e.target.value.toLowerCase();

    let result = jobAppState.filter((data) => {
      return (
        data.company.search(searchValue) !== -1 ||
        data.jobTitle.search(searchValue) !== -1 ||
        data.location.search(searchValue) !== -1 ||
        data.salary.search(searchValue) !== -1 ||
        data.status.search(searchValue) !== -1 ||
        data.webpage.search(searchValue) !== -1 ||
        data.contactName.search(searchValue) !== -1 ||
        data.contactNumber.search(searchValue) !== -1 ||
        data.description.search(searchValue) !== -1 ||
        data.notes.search(searchValue) !== -1
      );
    });

    setFilteredJobAppState(result);
  };

  const handleCompanyOnClick = () => {
    let jobApps = [...jobAppState];

    jobApps.sort((a, b) => {
      const companyA = a.company.toLowerCase();
      const companyB = b.company.toLowerCase();

      let comparison = 0;

      if (companyA > companyB) {
        comparison = 1;
      } else if (companyA < companyB) {
        comparison = -1;
      }

      return comparison;
    });

    // sortFunction.sortApp(jobApps, company)

    setFilteredJobAppState(jobApps);
  };

  const handleTitleOnClick = () => {
    let jobApps = [...jobAppState];

    jobApps.sort((a, b) => {
      const jobTitleA = a.jobTitle.toLowerCase();
      const jobTitleB = b.jobTitle.toLowerCase();

      let comparison = 0;

      if (jobTitleA > jobTitleB) {
        comparison = 1;
      } else if (jobTitleA < jobTitleB) {
        comparison = -1;
      }

      return comparison;
    });

    setFilteredJobAppState(jobApps);
  };

  const handleLocationOnClick = () => {
    let jobApps = [...jobAppState];

    jobApps.sort((a, b) => {
      const locationA = a.location.toLowerCase();
      const locationB = b.location.toLowerCase();

      let comparison = 0;

      if (locationA > locationB) {
        comparison = 1;
      } else if (locationA < locationB) {
        comparison = -1;
      }

      return comparison;
    });

    setFilteredJobAppState(jobApps);
  };

  const handleStatusOnClick = () => {
    let jobApps = [...jobAppState];

    jobApps.sort((a, b) => {
      const statusA = a.status.toLowerCase();
      const statusB = b.status.toLowerCase();

      let comparison = 0;

      if (statusA > statusB) {
        comparison = 1;
      } else if (statusA < statusB) {
        comparison = -1;
      }

      return comparison;
    });

    setFilteredJobAppState(jobApps);
  };

  return (
    <>
      <div className="row my-5 w-100 mx-auto">
        <div className="col-12">
          <h3 data-testid="title" className="text-center">
            Job Application Status Board
          </h3>
        </div>
      </div>

      <div className="row">
        <form>
          <input
            data-testid="search"
            type="text"
            className="rounded"
            placeholder="search job app"
            onChange={handleSearchOnChange}
            value={searchState}
          />
        </form>
      </div>

      <div className="row my-3">
        <div className="col-6">
          <button
            className="btn btn-secondary btn-md border filter-button"
            data-testid="company-type"
            onClick={handleCompanyOnClick}
          >
            Company
          </button>

          <button
            className="btn btn-secondary btn-md border filter-button"
            data-testid="job-title-type"
            onClick={handleTitleOnClick}
          >
            Job Title
          </button>

          <button
            className="btn btn-secondary btn-md border filter-button"
            data-testid="location-type"
            onClick={handleLocationOnClick}
          >
            Location
          </button>

          <button
            className="btn btn-secondary btn-md border filter-button"
            data-testid="stage-type"
            onClick={handleStatusOnClick}
          >
            Status
          </button>
          </div>
          <div className='col-6'>
            <button
              data-testid="addBtn"
              className="position-relative btn border addBtn float-end"
              type="button"
              onClick={() => {
                setJobDetailFormState("add");
                jobAppDetail.openNew();
              }}
            >
              + Add Job
            </button>
          </div>
        
      </div>
      {/* <div className='row'>
        <div className='col'> */}
      {jobApps}
      {/* </div>
      </div> */}
      <Dialog
        maxWidth="md"
        fullWidth={true}
        open={jobDetailState.open}
        onClose={() => jobAppDetail.close()}
      >
        <DialogContent>
          <JobAppDetail
            jobApp={jobDetailState.jobApp}
            jobDetailFormState={jobDetailFormState}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Dashboard;
