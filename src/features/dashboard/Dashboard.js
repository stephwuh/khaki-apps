import React, {useState, useEffect} from 'react';
import apiClient from '../../services/apiClient';


const Dashboard = () => {

    const [jobAppState, setJobAppState] = useState([]);

    useEffect(()=>{

        const jobAppDataPromise = apiClient.getApps();

        jobAppDataPromise.then(jobAppData => setJobAppState(jobAppData));

    }, []);

    let jobApps = jobAppState.map((jobApp, index) => {
        return(
            <div data-testid='job-app' key={index}>
                <div data-testid='company-name'>{jobApp.company}</div>
                <div data-testid='job-title'>{jobApp.jobTitle}</div>
                <div     data-testid='location'>{jobApp.location}</div>
                <div data-testid='salary'>{jobApp.salary}</div>
                <div data-testid='status'>{jobApp.status}</div>
            </div>
        );
    });

    return(
        <div>
            {jobApps}
        </div>
    )
}

export default Dashboard;