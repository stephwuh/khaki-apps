import axios from "axios";

const apiClient = {

    getApps: async () => {

        let response = await axios.get('http://localhost:5500/job-app');

        return response.data
    },
    updateJobApp: async (jobAppId, updatedJobApp) => {

        let response = await axios.put(`http://localhost:5500/job-app/${jobAppId}/`, updatedJobApp);

        return response.data
    },
    addJobApp: async (newJobApp) => {

        let response = await axios.post(`http://localhost:5500/job-app/`, newJobApp);

        return response.data
    },
};

export default apiClient;