import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryLabel, VictoryStack, VictoryTheme } from 'victory';
import { useEffect, useState } from 'react';
import Calendar from '../Calendar';
import Toast from '../Toast';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { getDeviceByHour } from '../../store/slice/device_by_hour';
const _ = require('lodash');

const DeviceByHour = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    //getData
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await dispatch(getDeviceByHour({startDate:Date.now(),endDate:Date.now()}));
                setData(res.payload);
                unwrapResult(res);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);
    const hours = [0, 2, 4, 6, 8, 10, 12, 2, 4, 6, 8, 10];
    const arrayHour = _.map(data, value => _.map(value.hours, (hour) => hour.value));
    //Tính thời gian
    const glossaryHour = arrayHour.map(value => {
        return _.reduce(value, (x, y) => x + y);
    });
    let valueOfX = 0;
    const dataGlossary = _.map(data, (value, index) => ({
        x: value.day,
        y: glossaryHour[index],
    }));
    return (
        <>
            <Calendar parent={'DEVICE_BY_HOUR'} setDataOfParent={(result)=>setData(result)}/>
            <Toast parent={'DEVICE_BY_HOUR'} parentData={data} color={'success'}/>
            <div style={{ margin: 'auto', width: 800 }}>
                <div style={{ float: 'left', width: 440 }}>
                    <VictoryChart style={{ parent: { width: 470 } }}>
                        <VictoryGroup
                            offset={20}
                        >
                            <VictoryStack
                                style={{
                                    data: {
                                        stroke: 'rgba(255,255,255,1)',
                                        strokeWidth: 2,
                                    },
                                }}
                            >
                                {data.length > 0 &&
                                data.map((value, index) => {
                                    return <VictoryBar barWidth={15} key={index} data={value.hours} style={{
                                        data:
                                            { fill: ({ datum }) => datum.color },
                                    }} />;
                                })
                                }
                            </VictoryStack>
                        </VictoryGroup>

                        <svg viewBox='0 0 900 50' style={{ paddingLeft: 70 }}>
                            {
                                hours.map((value, index) => {
                                    valueOfX += 60;
                                    return <text key={index} x={valueOfX} dx={40} y={280}
                                        style={{ fontSize: '25' }}>{value}</text>;
                                })
                            }
                        </svg>
                        <VictoryAxis style={{
                            axis: { stroke: 'none' },
                            ticks: { stroke: 'none' },
                            tickLabels: { fill: 'none' },
                        }} />

                    </VictoryChart>

                    <VictoryStack horizontal height={10}
                        colorScale={['#ecbdfa', '#eba4fd', '#dc89f8', '#d877fc', '#d26afd']}
                    >
                        <VictoryBar
                            data={[{ x: 'a', y: 34 }]}
                        />
                        <VictoryBar
                            data={[{ x: 'a', y: 50 }]}


                        />
                        <VictoryBar
                            data={[{ x: 'a', y: 32 }]}

                        />
                        <VictoryBar
                            data={[{ x: 'a', y: 32 }]}

                        />
                        <VictoryBar
                            data={[{ x: 'a', y: 32 }]}
                        />
                    </VictoryStack>
                    <VictoryAxis height={50} style={{
                        axis: { stroke: 'none' },
                        ticks: { stroke: 'none' },
                        tickLabels: { fontSize: 10 },
                    }} tickFormat={[0, 10, 20, 30, 40, 50]}
                    />
                </div>
                <div style={{ float: 'left', width: 330 }}>
                    <VictoryChart
                        responsive={false}
                        domainPadding={{ x: 0 }}
                        style={{
                            parent: { width: 230, height: 270 },
                        }}
                        height={313.33}
                        padding={{ top: 50, left: 100 }}
                        theme={VictoryTheme.material}>
                        <VictoryAxis width={50} height={700} style={{
                            axis: { stroke: 'none' },
                            ticks: { stroke: 'none' },
                            tickLabels: { fontSize: 16 },

                        }}
                        />
                        <VictoryBar horizontal
                            barWidth={20}
                            height={700}
                            alignment='center'
                            labels={({ datum }) => datum.y}
                            cornerRadius={{ top: 5 }}
                            style={{
                                data: { fill: '#4cfded', fillOpacity: 1 },
                                labels: { fill: '#000000', fontSize: 20 },
                                parent: { width: 200, height: 390, float: 'left', paddingTop: 70 },
                            }}
                            labelComponent={<VictoryLabel dx={-50} />}
                            data={dataGlossary}

                        />
                    </VictoryChart>
                    <svg viewBox='0 0 700 100'>
                        <text x={140} y={12} style={{ fontSize: '17' }}>{_.min(glossaryHour)}</text>
                        <text x={460} y={12} style={{ fontSize: '17' }}>{_.max(glossaryHour)}</text>
                    </svg>
                </div>
            </div>
        </>
    );
};
export default DeviceByHour;
