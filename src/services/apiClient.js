import axios from "axios";

const apiClient = {

    getApps: async () => {

        let response = await axios.get('http://localhost:5500/job-app');

        return response.data
    },
    updateJobApp: async () => {

        return Promise.resolve();

        // let response = await axios.get('http://localhost:5500/job-app');

        // return response.data
    }
};

export default apiClient;