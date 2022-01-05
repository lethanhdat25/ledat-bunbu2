import {VictoryBar, VictoryGroup, VictoryStack} from "victory";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDeviceByHour} from "../../store/slice/device_by_hour";
import {unwrapResult} from "@reduxjs/toolkit";
const _=require("lodash");
const DeviceByHour = () => {
    const [data,setData]=useState([]);
    const dispatch=useDispatch();
    //getData
    useEffect(()=>{
        const fetchData= async ()=>{
            try{
                const res= await dispatch(getDeviceByHour());
                setData(res.payload);
                unwrapResult(res);
            }catch (e){}
        };
        fetchData();
    },[]);
    return (
        <div style={{width:700,height:400,margin:"auto"}}>
        <VictoryGroup
                offset={20}
            >
                <VictoryStack
                    style={{
                        data: {
                            stroke: "rgba(255,255,255,1)",
                            strokeWidth: 2,
                        }
                    }}
                >
                    { data.length>0&&
                        data.map(value=>{
                            return <VictoryBar barWidth={15}  data={value.hours} style={{
                                data:
                                    {fill:({datum})=>datum.color}
                            }}/>
                        })
                    }
                </VictoryStack>
            </VictoryGroup>
        </div>
    )
};
export default DeviceByHour;
