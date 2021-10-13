import axios from "axios";

const apiClient = {

    getApps: async () => {

        // return fetch('https://run.mocky.io/v3/5130f0df-bd63-4dfe-8b01-aca5d3cf6d08')
        //     .then(response => response.json());

        // return axios.get('https://run.mocky.io/v3/5130f0df-bd63-4dfe-8b01-aca5d3cf6d08')
        //     .then(res => res.data)

        let response = await axios.get('https://run.mocky.io/v3/5130f0df-bd63-4dfe-8b01-aca5d3cf6d08');

        return response.data
    }
};

export default apiClient;