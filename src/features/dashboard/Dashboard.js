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
            <div data-testid='job-app' key={index}>job app</div>
        );
    });

    return(
        <div>
            {jobApps}
        </div>
    )
}

export default Dashboard;