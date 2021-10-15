import React, { useState, useEffect } from "react";
import {Dialog, DialogContent} from '@material-ui/core';
import apiClient from "../../services/apiClient";
import jobAddService from "../../services/jobAddService";
import jobAppDetail from "../../services/jobAppDetail";
import dashboard from "./dashboard.module.css";

const Dashboard = () => {
  const [jobAppState, setJobAppState] = useState([]);
  const [jobDetailState, setJobDetailState] = useState({open: false});

  useEffect(() => {
    const jobAppDataPromise = apiClient.getApps();

    jobAppDataPromise.then((jobAppData) => setJobAppState(jobAppData));
    
  }, []);


  /* 
    the dialog service exposes events with whether the dialog is closed or opened.
    so we can now use an useEffect to subscript to the events and then update the state
  */

    useEffect(()=> {
        const subscription = jobAppDetail.eventsStream.subscribe(state => setJobDetailState(state));

        return() => subscription.unsubscribe();

    }, [])


  let jobApps = jobAppState.map((jobApp, index) => {
    return (
      <div 
        data-testid="job-app" 
        key={index} 
        className={dashboard.jobs}
        onClick={()=>{
            jobAppDetail.open(jobApp);
        }}>
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


  return (
    <div className={dashboard.container}>
      <div className={dashboard.btnContainer}>
        <h3 data-testid="title">Job Applications</h3>
        <button
          data-testid="addBtn"
          type="button"
          onClick={() => {
            // console.log('click');
            jobAddService.open();
          }}
        >
          + Add Job
        </button>
      </div>
      <form data-testid="search">
        <input
          type="text"
          className={dashboard.search}
          placeholder="search job app"
        />
      </form>
      <div className={dashboard.filters}>
        <button data-testid="date-type">Date</button>
        <button data-testid="company-type">Company</button>
        <button data-testid="job-title-type">Job Title</button>
        <button data-testid="location-type">Location</button>
        <button data-testid="stage-type">Stage</button>
      </div>
      {jobApps}
    <Dialog 
        open ={jobDetailState.open}
        onClose={() => jobAppDetail.close()}>
        <DialogContent>
            Dialog!
            {jobDetailState.jobApp ? jobDetailState.jobApp.company: null }
        </DialogContent>
    </Dialog>
    </div>

  );
};

export default Dashboard;
