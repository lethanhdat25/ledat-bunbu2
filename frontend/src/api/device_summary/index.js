import axios from 'axios';

export const deviceSummaryApi = {
    getDeviceSummary: async () => {
        return await axios.get('http://localhost:8080/device_summary');
    },
};
