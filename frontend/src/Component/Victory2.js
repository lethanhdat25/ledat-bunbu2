import {useEffect, useState} from "react";
import {VictoryChart, VictoryScatter} from "victory";
import axios from "axios";
const random=(min, max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
}
//URL BACKEND
const url ="http://localhost:8080/";

const Victory2=()=>{
    const [scatterData,setScatterData]=useState();
    const [data,setData]=useState();
    useEffect(()=>{
        const fetchData=async ()=>{
            const result=await axios.get(url);
            setData(result.data)
        }
        fetchData();
    },[])
    useEffect( ()=>{
        const timer= setInterval(()=>{
            setScatterData(getScatterData)
        },3000)
        return ()=>{
            clearInterval(timer)
        }
    },[data])
    const getScatterData=()=>{
        const colors = data.colors;
        const symbols = data.symbols;
        return [...Array(25).keys()].   map((index) => {
            const scaledIndex = Math.floor(index % 7);
            return {
                x: random(10, 50),
                y: random(2, 100),
                size: random(8) + 3,
                symbol: symbols[scaledIndex],
                fill: colors[random(0, 6)],
                opacity: 0.6
            };
        });
    }
    return (
        <VictoryChart animate={{ duration: 3000, easing: "back" }}>
            <VictoryScatter
                data={scatterData}
                style={{
                    data: {
                        fill: ({ datum }) => datum.fill,
                        opacity: ({ datum }) => datum.opacity
                    }
                }}
            />
        </VictoryChart>
    );
}
export default Victory2;