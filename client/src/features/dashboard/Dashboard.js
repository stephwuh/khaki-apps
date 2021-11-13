import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import apiClient from "../../services/apiClient";
import jobAppDetail from "../../services/jobAppDetail";
import JobAppDetail from "../jobAppDetail/JobAppDetail";
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

  const handleSearchOnChange = (e) => {
    setSearchState(e.target.value);

    let searchValue = e.target.value.toLowerCase();

    let result = jobAppState.filter((data) => {
      const company = !data.company ? "" : data.company;
      const jobTitle = !data.jobTitle ? "" : data.jobTitle;
      const location = !data.location ? "" : data.location;
      const salary = !data.salary ? "" : data.salary;
      const status = !data.status ? "" : data.status;
      const webpage = !data.webpage ? "" : data.webpage;
      const contactName = !data.contactName ? "" : data.contactName;
      const contactNumber = !data.contactNumber ? "" : data.contactNumber;
      const description = !data.description ? "" : data.description;
      const notes = !data.notes ? "" : data.notes;

      return (
        company.toLowerCase().search(searchValue) !== -1 ||
        jobTitle.toLowerCase().search(searchValue) !== -1 ||
        location.toLowerCase().search(searchValue) !== -1 ||
        salary.toLowerCase().search(searchValue) !== -1 ||
        status.toLowerCase().search(searchValue) !== -1 ||
        webpage.toLowerCase().search(searchValue) !== -1 ||
        contactName.toLowerCase().search(searchValue) !== -1 ||
        contactNumber.toLowerCase().search(searchValue) !== -1 ||
        description.toLowerCase().search(searchValue) !== -1 ||
        notes.toLowerCase().search(searchValue) !== -1
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

  let jobApps = filteredJobAppState.map((jobApp, index) => {
    return (
      <div
        data-testid="job-app"
        className="row row-cols-lg-5 row-cols-md-3 row-cols-2 my-3 gx-0 border rounded bg-white job-overview"
        key={index}
        onClick={() => {
          setJobDetailFormState("update");
          jobAppDetail.open(jobApp);
        }}
      >
        <div
          // data-testid="company-name"
          className="col text-center my-auto py-5"
        >
          <h5>Company</h5>
          <p data-testid="company-name" className="wrap-content">
            {jobApp.company}
          </p>
        </div>
        <div className="col text-center my-auto">
          <h5>Job Title</h5>
          <p data-testid="job-title" className="wrap-content">
            {jobApp.jobTitle}
          </p>
        </div>
        <div className="col text-center my-auto">
          <h5>Location</h5>
          <p data-testid="location" className="wrap-content">
            {jobApp.location}
          </p>
        </div>
        <div className="col text-center my-auto">
          <h5>Salary</h5>
          <p data-testid="salary" className="wrap-content">
            {jobApp.salary}
          </p>
        </div>
        <div className="col text-center my-auto py-5">
          <h5>Status</h5>
          <p data-testid="status" className="wrap-content">
            {jobApp.status}
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="row my-5 w-100 mx-auto">
        <div className="col-12">
          <h3 data-testid="title" className="text-center">
            Job Application Board
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

      <div className="row my-3 mx-auto">
        <div className="col-6">
          <div className="row d-md-block d-lg-none ">
            <div className="col-4 col-sm-3 gx-0">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle filter-button w-100"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter
                </button>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleCompanyOnClick}
                    >
                      Company
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleTitleOnClick}
                    >
                      Job Title
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleLocationOnClick}
                    >
                      Location
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleStatusOnClick}
                    >
                      Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row d-none d-lg-flex">
            <div className="col-3 col-md-2 px-0 ">
              <button
                className="btn btn-secondary w-100 btn-md border filter-button"
                data-testid="company-type"
                onClick={handleCompanyOnClick}
              >
                Company
              </button>
            </div>
            <div className="col-3 col-md-2 px-0">
              <button
                className="btn btn-secondary w-100 btn-md border filter-button text-nowrap"
                data-testid="job-title-type"
                onClick={handleTitleOnClick}
              >
                Job Title
              </button>
            </div>
            <div className="col-3 col-md-2 px-0">
              <button
                className="btn btn-secondary btn-md border w-100 filter-button"
                data-testid="location-type"
                onClick={handleLocationOnClick}
              >
                Location
              </button>
            </div>
            <div className="col-3 col-md-2 px-0">
              <button
                className="btn btn-secondary btn-md border w-100 filter-button"
                data-testid="stage-type"
                onClick={handleStatusOnClick}
              >
                Status
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 gx-0">
          <div className="row justify-content-end">
            <div className=" col-5 col-sm-3 col-lg-2">
              <button
                data-testid="addBtn"
                className="btn border w-100 addBtn text-nowrap"
                type="button"
                onClick={() => {
                  setJobDetailFormState("add");
                  jobAppDetail.openNew();
                }}
              >
                Add
              </button>
            </div>
          </div>
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
