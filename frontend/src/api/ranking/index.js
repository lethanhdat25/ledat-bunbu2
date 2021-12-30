import axios from "axios";

export const rankingApi={
    getData:async ()=>{
        return await axios.get("http://localhost:8080/ranking");
    }
};
