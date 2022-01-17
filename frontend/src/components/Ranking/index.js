import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryTheme } from 'victory';
import { useEffect, useState } from 'react';
import Calendar from '../Calendar';
import Toast from '../Toast';
import { getRanking } from '../../store/slice/ranking';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
const _ = require('lodash');

const Ranking = () => {
    const [data,setData] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await dispatch(getRanking({startDate:Date.now(),endDate:Date.now()}));
                setData(res.payload);
                unwrapResult(res);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <Calendar parent={'RANKING'} setDataOfParent={(result)=>setData(result)}/>
            <Toast parent={'RANKING'} parentData={data} color={'warning'}/>
            <div style={{ width: 800, height: 300}}>
                <h2>Ranking</h2>
                <svg viewBox='0 0 700 50'>
                    <text x={51} y={20} style={{ fontSize: '25' }}>Day</text>
                    <text x={560} y={20} style={{ fontSize: '25' }}>Number</text>
                </svg>
                <VictoryChart
                    width={900} height={350}
                    responsive={false}
                    domainPadding={{ x: 0}}
                    theme={VictoryTheme.material}
                >
                    <VictoryAxis orientation='right' style={{
                        axis: { stroke: 'none' },
                        axisLabel: { padding: 20 },
                    }} tickFormat={_.map(data, value => value.y)}
                    tickLabelComponent={<VictoryLabel dy={-23} />}
                    />
                    <VictoryAxis horizontal style={{
                        axis: { stroke: 'none' },
                        ticks: { stroke: 'none' },
                        tickLabels: { fill: 'none' },
                        grid: { stroke: '#a5a0aa', strokeDasharray: 'none' },
                    }} standalone={false} />
                    <VictoryBar horizontal
                        barRatio={1.5}
                        alignment='start'
                        labels={({ datum }) => datum.x}
                        style={{
                            data: { fill: '#ede5fd', fillOpacity: 1 },
                            labels: { fill: '#000000' },
                        }}
                        labelComponent={<VictoryLabel x={50} dy={-23} />}
                        data={data}
                    />
                </VictoryChart>
            </div>
        </>
    );
};
export default Ranking;
