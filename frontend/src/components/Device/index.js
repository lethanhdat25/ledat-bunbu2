import { VictoryAxis, VictoryLine } from 'victory';
import { useEffect, useState } from 'react';
import Calendar from '../Calendar';
import Toast from '../Toast';
import { getDevice } from '../../store/slice/device';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
const _=require('lodash');

const Device = () => {
    const [data, setData] = useState([]);
    const tickValueData = data && data.map(value => {
        return _.map(value, year => year.x.year);
    }).flat();
    const dispatch= useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await dispatch(getDevice({startDate:Date.now(),endDate:Date.now()}));
                setData(res.payload);
                console.log(res.query);
                unwrapResult(res);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);
    const line = data && data.map((value, index) => {
        const dateLine = value.map(date => ({ x: new Date(date.x.year, date.x.month, date.x.day), y: date.y }));
        return (
            <VictoryLine
                width={600}
                key={index}
                data={dateLine}
                domain={{
                    x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
                    y: [0, 180],
                }}
                interpolation='monotoneX'
                scale={{ x: 'time', y: 'linear' }}
                standalone={false}
            />
        );
    });
    return (
        <>
            <Calendar parent={'DEVICE'} setDataOfParent={(result)=>setData(result)}/>
            <Toast parent={'DEVICE'} parentData={data} color={'primary'}/>
            <div style={{ width: 900, height: 400, paddingLeft: 20, paddingTop: 20 }}>
                <svg style={{
                    padding: 0,
                    fontFamily: '\'Fira Sans\', sans-serif',
                }} viewBox='0 0 700 290'>
                    <g>
                        <VictoryAxis
                            scale={'time'}
                            tickValues={tickValueData}
                            tickFormat={
                                (d) => {
                                    if (d > 10 && d % 2 === 0) {
                                        return d;
                                    }
                                }
                            }
                            standalone={false}
                            dependentAxis={false}
                            width={600}
                        />
                        <VictoryAxis dependentAxis
                            domain={[0, 190]}
                            offsetX={50}
                            orientation='left'
                            standalone={false}
                        />
                        {line}
                    </g>
                </svg>
            </div>
        </>
    );
};
export default Device;
