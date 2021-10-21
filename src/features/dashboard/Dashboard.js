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
          className='row h-25'
          key={index}
          onClick={() => {
            setJobDetailFormState("update");
            jobAppDetail.open(jobApp);
          }}
        >
          <div
            data-testid="company-name"
            className='col'
          >
            <h5>Company</h5>
            {jobApp.company}
          </div>
          <div
            data-testid="job-title"
            className='col'
          >
            <h5>Job Title</h5>
            {jobApp.jobTitle}
          </div>
          <div
            data-testid="location"
            className='col'
          >
            <h5>Location</h5>
            {jobApp.location}
          </div>
          <div
            data-testid="salary"
            className='col'
          >
            <h5>Salary</h5>
            {jobApp.salary}
          </div>
          <div
            data-testid="status"
            className='col'
          >
            <h5>Status</h5>
            {jobApp.status}
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
            Job Applications
          </h3>
        </div>
        <div>
          <button
            data-testid="addBtn"
            className="position-relative addBtn"
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

      <div className="row">
        <form>
          <input
            data-testid="search"
            type="text"
            // className={dashboard.search}
            placeholder="search job app"
            onChange={handleSearchOnChange}
            value={searchState}
          />
        </form>
      </div>

      <div className="row">
        <div className="col">
          <button data-testid="company-type" onClick={handleCompanyOnClick}>
            Company
          </button>
        </div>
        <div className="col">
          <button data-testid="job-title-type" onClick={handleTitleOnClick}>
            Job Title
          </button>
        </div>
        <div className="col">
          <button data-testid="location-type" onClick={handleLocationOnClick}>
            Location
          </button>
        </div>
        <div className="col">
          <button data-testid="stage-type" onClick={handleStatusOnClick}>
            Status
          </button>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          {jobApps}
        </div>
      </div>
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
