import axios from 'axios';

export const rankingApi = {
    getData: async (params) => {
        return await axios.get(`http://localhost:8080/ranking?startDate=${params.startDate}&endDate=${params.endDate}`);
    },
};
