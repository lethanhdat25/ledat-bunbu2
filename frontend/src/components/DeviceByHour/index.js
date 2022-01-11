import {VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryLabel, VictoryStack, VictoryTheme} from "victory";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDeviceByHour} from "../../store/slice/device_by_hour";
import {unwrapResult} from "@reduxjs/toolkit";
const _=require("lodash");
const DeviceByHour = () => {
    const [data,setData]=useState([]);
    const dispatch=useDispatch();
    const hours=[0,2,4,6,8,10,12,2,4,6,8,10];
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
    const arrayHour=_.map(data,value=>_.map(value.hours,(hour)=>hour.value));
    const glossaryHour=arrayHour.map(value=>{
        return _.reduce(value,(x,y)=>x+y)
    })
    let valueOfX=0;
    const dataGlossary=_.map(data,(value,index)=>({
        x:value.day,
        y:glossaryHour[index]
    }));
    console.log(data)
    return (
    <div style={{margin:"auto",width:1200}}>
        <div style={{float:"left",width: 670}}>
            <VictoryChart style={{parent:{width:700}}}>
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

                <svg viewBox="0 0 900 50" style={{paddingLeft:70}}>
                    {
                        hours.map(value=>{
                            valueOfX+=60;
                            return <text x={valueOfX} dx={40} y={280} style={{fontSize: "25"}}>{value}</text>
                        })
                    }

                </svg>
                <VictoryAxis style={{
                    axis: {stroke: 'none'},
                    ticks: {stroke: 'none'},
                    tickLabels: {fill: 'none'},
                }}/>

            </VictoryChart>

            <VictoryStack horizontal height={10}
                colorScale={["#ecbdfa", "#eba4fd", "#dc89f8","#d877fc","#d26afd"]}
            >
                <VictoryBar
                    data={[{x: "a", y: 34}]}

                />
                <VictoryBar
                    data={[{x: "a", y: 50}]}


                />
                <VictoryBar
                    data={[{x: "a", y: 32}]}

                />
                <VictoryBar
                    data={[{x: "a", y: 32}]}

                />
                <VictoryBar
                    data={[{x: "a", y: 32}]}
                />
            </VictoryStack>
            <VictoryAxis height={50} style={{
                axis: {stroke: 'none'},
                ticks: {stroke: 'none'},
                tickLabels: {fontSize:10},
            }}
                 tickFormat={[0,10,20,30,40,50]}
            />
        </div>
        <div style={{float:"left",width: 530}}>
            <VictoryChart
                          responsive={false}
                          domainPadding={{x: 0}}
                          style={{
                              parent: {width: 200, height: 400},
                          }}
                          height={600}
                          padding={{top:120,left:100}}
                          theme={VictoryTheme.material}>
            <VictoryAxis  width={50} height={700} style={{
                axis: {stroke: 'none'},
                ticks: {stroke: 'none'},
                tickLabels: {fontSize:16},

            }}
            />
            <VictoryBar horizontal
                        barWidth={35}
                        height={700}
                        alignment="center"
                        labels={({datum}) => datum.y}
                        cornerRadius={{top:5}}
                        style={{
                            data: {fill: '#4cfded', fillOpacity: 1,},
                            labels: {fill: '#000000',fontSize:20},
                            parent:{width:200,height:390,float:"left",paddingTop:70},
                        }}
                        labelComponent={<VictoryLabel dx={-50} />}
                        data={dataGlossary}

            />
            </VictoryChart>
            <svg viewBox="0 0 700 100">
                <text x={50} y={10} style={{fontSize: "15"}}>{_.min(glossaryHour)}</text>
                <text x={250} y={10} style={{fontSize: "15"}}>{_.max(glossaryHour)}</text>
            </svg>
        </div>
    </div>
    )
};
export default DeviceByHour;
