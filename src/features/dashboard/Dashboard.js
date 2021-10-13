import React, {useState, useEffect} from 'react';


const Dashboard = () => {

    const [jobAppState, setJobAppState] = useState([]);

    useEffect(()=>{

        const func = async () => {
            const jobAppDataPromise = await Promise.resolve([
                {
                    company: "test company 1",
                    jobTitle: "test job title 1",
                    location: "test location 1",
                    salary: "test salary 1",
                    status: "test status 1"
                },
                {
                    company: "test company 2",
                    jobTitle: "test job title 2",
                    location: "test location 2",
                    salary: "test salary 2",
                    status: "test status 2"
                },
                {
                    company: "test company 3",
                    jobTitle: "test job title 3",
                    location: "test location 3",
                    salary: "test salary 3",
                    status: "test status 3"
                },
                {
                    company: "test company 4",
                    jobTitle: "test job title 4",
                    location: "test location 4",
                    salary: "test salary 4",
                    status: "test status 4"
                }
            ]);

            setJobAppState(jobAppDataPromise);
    
        }

        func();

    }, []);

    let jobApps = jobAppState.map((jobApp, index) => {
        return(
            <div data-testid = 'job-app' key={index}>job app</div>
        );
    });

    return(
        <div>
            {jobApps}
        </div>
    )
}

export default Dashboard;