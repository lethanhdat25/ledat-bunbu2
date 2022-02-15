import {VictoryPie} from 'victory';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getDeviceType} from '../../store/slice/device_type';
import {unwrapResult} from '@reduxjs/toolkit';
import LabelPieChart from '../LabelPieChart';

const DeviceType = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await dispatch(getDeviceType([]));
                setData(res.payload);
                unwrapResult(res);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    const color = ['#6abdb0', '#8a63db', '#252ff5', '#e633ff', '#fcd569', '#f52525', '#000000'];

    const pieData = data.length > 0 && data.map(value => {
        return {
            y: value.y
        };
    });

    let totalOS = 0;

    data.forEach(value => totalOS += value.y);

    const handleCloseBox = (data) => setData(data);

    const osPercent=data.map(value=>({...value,y:Math.round(value.y*100/totalOS)}));

    const renderPercent=osPercent.map((value,index)=>(
        <div key={index} style={{width:150}}>
            <div style={{height: 20}}>
                <div style={{
                    width: 20,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: color[index],
                    float: 'left',
                    paddingTop: 10,
                }}/>
                <span style={{float: 'right', marginTop: -7}}>{value.x}</span>
            </div>
            <h4 style={{marginTop: 10}}>{value.y}%</h4>
        </div>
    ));

    return (
        <>
            <LabelPieChart handleCloseBox={handleCloseBox}/>
            <div style={{width:'100%',
                height: 400,
                margin: 'auto',
                float: 'left',
                position: 'relative'}}>
                <VictoryPie colorScale={data && color}
                    innerRadius={100}
                    data={data ? pieData : null}
                    style={{parent: {width: 300}}}
                    labels={({datum}) => datum.xName}
                />
                <div style={{position: 'absolute',
                    display: 'grid',
                    gridTemplateColumns: '2fr 2fr',
                    top: '20%',
                    right:'15%',
                    gridGap: '25px'}}>
                    {renderPercent}
                </div>
            </div>
        </>
    );
};

export default DeviceType;
