import axios from "axios";

export const device_by_hour={
    getData: async ()=>{
        return await axios.get("http://localhost:8080/device_by_hour");
    }
};
