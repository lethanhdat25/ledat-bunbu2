import axios from 'axios';

export const deviceTypeApi = {
    getData: async (params) => {
        return await axios.post('http://localhost:8080/device_type',{
            os:params
        });
    },
};
