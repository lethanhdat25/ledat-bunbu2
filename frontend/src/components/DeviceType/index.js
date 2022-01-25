import { VictoryPie } from 'victory';
import { useEffect, useState } from 'react';
import Calendar from '../Calendar';
import Toast from '../Toast';
import { useDispatch } from 'react-redux';
import { getDeviceType } from '../../store/slice/device_type';
import { unwrapResult } from '@reduxjs/toolkit';

const DeviceType = () => {
    const [data, setData] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await dispatch(getDeviceType({startDate:Date.now(),endDate:Date.now()}));
                setData(res.payload);
                unwrapResult(res);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    const getKey = data && Object.keys(data);
    const pieData = data && getKey.map(value => ({
        y: data[value],
    }));

    const iosPercent = data && Math.round(data.ios * 100 / (data.ios + data.android));
    const androidPercent = data && Math.round(data.android * 100 / (data.ios + data.android));

    return (
        <>
            <Calendar parent={'DEVICE_TYPE'} setDataOfParent={(result)=>setData(result)}/>
            <Toast parent={'DEVICE_TYPE'} parentData={data} color={'danger'}/>
            <div style={{ width: 520, height: 400, margin: 'auto', float: 'left', position: 'relative' }}>
                <VictoryPie colorScale={data ? ['#6abdb0', '#8a63db'] : ['gray']}
                    innerRadius={100}
                    data={data? pieData : null}
                    style={{ parent: { width: 300 } }}
                    labels={({ datum }) => datum.xName}
                />
                <div style={{ position: 'absolute', right: 0, top: '30%' }}>
                    <div style={{ height: 20, width: 200 }}>
                        <div style={{
                            width: 20,
                            height: 10,
                            borderRadius: 10,
                            backgroundColor: '#6abdb0',
                            float: 'left',
                            paddingTop: 10,
                        }} />
                        <span style={{ float: 'right', marginTop: -7 }}>{data&&data.ios}</span>
                    </div>
                    <h4 style={{ marginTop: 10 }}>{iosPercent?iosPercent:0}%</h4>
                    <div style={{ height: 20, width: 200 }}>
                        <div style={{ width: 20, height: 10, borderRadius: 10, backgroundColor: '#8a63db', float: 'left' }} />
                        <span style={{ float: 'right', marginTop: -7 }}>{data&&data.android}</span>
                    </div>
                    <h4 style={{ marginTop: 10 }}>{androidPercent?androidPercent:0}%</h4>
                </div>
            </div>
        </>
    );
};

export default DeviceType;
