import axios from 'axios';

export const deviceTypeApi = {
    getData: async (params) => {
        return await axios.get(`http://localhost:8080/device_type?startDate=${params.startDate}&endDate=${params.endDate}`);
    },
};
