import axios from 'axios';

export const deviceApi = {
    getData: async (params) => {
        return await axios.get(`http://localhost:8080/device?startDate=${params.startDate}&endDate=${params.endDate}`);
    }
};
