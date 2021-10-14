import React, {useState, useEffect} from 'react';
import apiClient from '../../services/apiClient';
import dashboard from './dashboard.module.css';


const Dashboard = () => {

    const [jobAppState, setJobAppState] = useState([]);

    useEffect(()=>{

        const jobAppDataPromise = apiClient.getApps();

        jobAppDataPromise.then(jobAppData => setJobAppState(jobAppData));

    }, []);

    let jobApps = jobAppState.map((jobApp, index) => {
        return(
            <div data-testid='job-app' key={index} className={dashboard.jobs}>
                <div data-testid='company-name' className={dashboard.items}>
                    <h5>Company</h5>
                    {jobApp.company}
                </div>
                <div data-testid='job-title' className={dashboard.items}>
                    <h5>Job Title</h5>
                    {jobApp.jobTitle}
                </div>
                <div data-testid='location' className={dashboard.items}>
                    <h5>Location</h5>
                    {jobApp.location}
                </div>
                <div data-testid='salary' className={dashboard.items}>
                    <h5>Salary</h5>
                    {jobApp.salary}
                </div>
                <div data-testid='status' className={dashboard.items}>
                    <h5>Status</h5>
                    {jobApp.status}
                </div>
            </div>
        );
    });

    return(
        <div className={dashboard.container}>
            <h3 data-testid='title'>Job Applications</h3>
            <form data-testid='search'>
                <input type='text' className={dashboard.search} placeholder='search job app' />
            </form>
            <div className={dashboard.filters}>
                <button data-testid='date-type'>Date</button>
                <button data-testid='company-type'>Company</button>
                <button data-testid='job-title-type'>Job Title</button>
                <button data-testid='location-type'>Location</button>
                <button data-testid='stage-type'>Stage</button>
            </div>
            {jobApps}
        </div>
    )
}

export default Dashboard;