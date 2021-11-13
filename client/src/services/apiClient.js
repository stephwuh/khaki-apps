import axios from "axios";

const apiClient = {

    getApps: async () => {

        let response = await axios.get('http://localhost:3001/api/getApps');

        return response.data
    },
    updateJobApp: async (jobAppId, updatedJobApp) => {

        let response = await axios.put(`http://localhost:3001/api/updateJobApp/${jobAppId}`, updatedJobApp);

        return response.data
    },
    addJobApp: async (newJobApp) => {

        let response = await axios.post(`http://localhost:3001/api/addJobApp/`, newJobApp);

        return response.data
    },
    deleteJobApp: async (jobAppId) => {

        let response = await axios.delete(`http://localhost:3001/api/deleteJobApp/${jobAppId}`);

        return response.data
    },

};

export default apiClient;