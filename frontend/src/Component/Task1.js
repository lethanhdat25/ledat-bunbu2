import {VictoryPie, VictoryPolarAxis, VictoryTheme} from "victory";
import {useEffect, useState} from "react";
import axios from "axios";


const Task1=()=>{
    const [data,setData]=useState({});
    useEffect(()=>{
        const fetchData=async ()=>{
            await axios.get("http://localhost:8080/device_summary")
                .then(rs=>{
                    setData(rs.data)
                })
                .catch(err=>console.log(err))
        }
        fetchData();
    },[])

    const getKey=Object.keys(data);
    const pieData= getKey.map(value=>({
            x:value,
            y:data[value]
        })
    )
    return(
        <div style={{width:400,height:400,margin:"auto"}}>
            <VictoryPie data={pieData} style={{labels:{ padding: 5}}}/>
        </div>
    )
};
export default Task1;