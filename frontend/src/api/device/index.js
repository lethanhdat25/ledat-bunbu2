import axios from 'axios';

const url='http://localhost:8080/device';
export const deviceApi = {
    getData: async (params) => {
        return await axios.get(url+`?startDate=${params?.startDate}&endDate=${params?.endDate}`);
    }
};
