import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, makeStyles } from "@material-ui/core";
import apiClient from "../../services/apiClient";
import jobAddService from "../../services/jobAddService";
import jobAppDetail from "../../services/jobAppDetail";
import dashboard from "./dashboard.module.css";
import JobAppDetail from "../jobAppDetail/JobAppDetail";

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
        key={index}
        className={dashboard.jobs}
        onClick={() => {
          setJobDetailFormState("update");
          jobAppDetail.open(jobApp);
        }}
      >
        <div data-testid="company-name" className={dashboard.items}>
          <h5>Company</h5>
          {jobApp.company}
        </div>
        <div data-testid="job-title" className={dashboard.items}>
          <h5>Job Title</h5>
          {jobApp.jobTitle}
        </div>
        <div data-testid="location" className={dashboard.items}>
          <h5>Location</h5>
          {jobApp.location}
        </div>
        <div data-testid="salary" className={dashboard.items}>
          <h5>Salary</h5>
          {jobApp.salary}
        </div>
        <div data-testid="status" className={dashboard.items}>
          <h5>Status</h5>
          {jobApp.status}
        </div>
      </div>
    );
  });

  const handleSearchOnChange = e => {

    setSearchState(e.target.value)

    let searchValue = e.target.value.toLowerCase();

    let result = jobAppState.filter((data)=>{

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
      )

    });

    setFilteredJobAppState(result);

  }

  const handleCompanyOnClick = () => {

    let jobApps = [...jobAppState]

    jobApps.sort((a,b) => {

      const companyA = a.company.toLowerCase();
      const companyB = b.company.toLowerCase();

      let comparison = 0;
      
      if (companyA > companyB) {
        comparison = 1;
      } else if (companyA < companyB) {
        comparison = -1;
      }

      return comparison;

    })

    setFilteredJobAppState(jobApps)

  }

  return (
    <div className={dashboard.container}>
      <div className={dashboard.btnContainer}>
        <h3 data-testid="title">Job Applications</h3>
        <button
          data-testid="addBtn"
          type="button"
          onClick={() => {
            setJobDetailFormState("add");
            jobAppDetail.openNew();
          }}
        >
          + Add Job
        </button>
      </div>
      <form>
        <input
          data-testid="search"
          type="text"
          className={dashboard.search}
          placeholder="search job app"
          onChange={handleSearchOnChange}
          value={searchState}
        />
      </form>
      <div className={dashboard.filters}>
        <button data-testid="date-type">Date</button>
        <button 
          data-testid="company-type"
          onClick={handleCompanyOnClick}>Company</button>
        <button data-testid="job-title-type">Job Title</button>
        <button data-testid="location-type">Location</button>
        <button data-testid="stage-type">Stage</button>
      </div>
      {jobApps}
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
    </div>
  );
};

export default Dashboard;
