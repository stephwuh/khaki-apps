import axios from "axios";

const apiClient = {

    getApps: async () => {

        let response = await axios.get('/api/getApps');

        return response.data
    },
    updateJobApp: async (jobAppId, updatedJobApp) => {

        let response = await axios.put(`/api/updateJobApp/${jobAppId}`, updatedJobApp);

        return response.data
    },
    addJobApp: async (newJobApp) => {

        let response = await axios.post(`/api/addJobApp/`, newJobApp);

        return response.data
    },
    deleteJobApp: async (jobAppId) => {

        let response = await axios.delete(`/api/deleteJobApp/${jobAppId}`);

        return response.data
    },

};

export default apiClient;