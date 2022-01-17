import axios from 'axios';

export const deviceByHour = {
    getData: async (params) => {
        return await axios.get(`http://localhost:8080/device_by_hour?startDate=${params.startDate}&endDate=${params.endDate}`);
    },
};
