import {VictoryAxis, VictoryLine} from 'victory';
import {useEffect, useState} from 'react';
import Calendar from '../Calendar';
import Toast from '../Toast';
import {getDevice} from '../../store/slice/device';
import {unwrapResult} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

const Device = () => {
    const [data, setData] = useState([]);
    const [tickValueData,setTickValueData]= useState([]);
    const [tagData,setTagData]=useState([
        {name:'Day', margin:12, color:'#19b226', borderRadius:20,display:'none'},
        {name:'Week', margin:120, color:'#19b226', borderRadius:20,display:'none'},
        {name:'Month', margin:220, color:'#19b226', borderRadius:20,display:'block'},
    ]);

    const firstDateOfWeek=moment().startOf('week').fromNow()[0];
    const [configTickLabel,setTickLabel]=useState('Month');

    const [dateLine,setDateLine]=useState([]);

    const dispatch= useDispatch();

    const lineColor=['#8042f5','#39fad7'];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await dispatch(getDevice());
                setData(res.payload);

                //Default tick value is 30day
                setTickValueData(res.payload.map(value => {
                    return _.map(value, date => date.dayData.x);
                }).flat());

                //Default line value is 30day
                setDateLine(res.payload.map(value=> value.map(date => ({ x: date.dayData.x, y: date.dayData.y }))));
                unwrapResult(res);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    useEffect(()=>{
        setTickValueData(data.map(value => {
            return _.map(value, (date,index) =>{
                switch (configTickLabel){
                    case 'Month':{
                        return date.dayData.x;
                    }
                    case 'Day':{
                        return _.range(1,25)[index];
                    }
                    case 'Week':{
                        return date.dayData.x;
                    }
                }
            });
        }).flat());

        setDateLine(data.map(value=> {
            const dateNow=value.find(date=>date.dayData.x===new Date().getDate()&&date);

            // Day
            if (configTickLabel==='Day'){
                return dateNow.hourData;
            }

            // Month
            if (configTickLabel==='Week'){
                if (new Date().getDate()-firstDateOfWeek>0){
                    console.log(value[new Date().getDate()-firstDateOfWeek-1]);
                }
                let arrWeek=[];
                for (let i=new Date().getDate()-1;i<7;i++) {
                    arrWeek.push(value[i].dayData);
                }
                return arrWeek;
            }

            //Week
            if (configTickLabel==='Month') {
                return value.map(date => {
                    return {x: date.dayData.x, y: date.dayData.y};
                });
            }
        }));

    },[configTickLabel,data]);

    const handleClickTag=(name)=>{
        const data=tagData.map(value=>{
            if (value.name===name){
                return {...value,display:'block'};
            }
            return  {...value,display:'none'};
        });

        setTickLabel(name);
        setTagData(data);
    };

    const domainTickLine=()=>{
        switch (configTickLabel){
            case 'Month':{
                return {
                    x: [1,40],
                    y: [200, 590],
                };
            }
            case 'Day':{
                return {
                    x: [1,31],
                    y: [1, 40],
                };
            }
            case 'Week':{
                return {
                    x: [1,8.8],
                    y: [200, 590],
                };
            }
        }
    };

    const line = data && data.map((value, index) => {
        return (
            <VictoryLine
                width={1000}
                key={index}
                data={dateLine[index]}
                style={{data:{stroke:lineColor[index]}}}
                domain={domainTickLine()}
                standalone={false}
            />
        );
    });

    const domainTickAxis=()=>{
        switch (configTickLabel){
            case 'Month':{
                return 31;
            }
            case 'Day':{
                return 24;
            }
            case 'Week':{
                return 7;
            }
        }
    };

    const configAxis=()=>{
        return(
            <>
                <VictoryAxis
                    tickValues={tickValueData}
                    tickFormat={
                        (d) => {
                            switch (configTickLabel){
                                case 'Month':{
                                    if (d%5===0){
                                        return d;
                                    }
                                    break  ;
                                }
                                case 'Day':{
                                    if (d%2===0){
                                        return d;
                                    }
                                    break ;
                                }
                                case 'Week':{
                                    return d;
                                }
                            }
                        }
                    }
                    standalone={false}
                    dependentAxis={false}
                    domain={[1,domainTickAxis()]}
                    width={800}
                />
                <VictoryAxis dependentAxis
                    domain={[200, 590]}
                    offsetX={50}
                    orientation='left'
                    standalone={false}
                    width={800}
                    style={{
                        axis: { stroke: 'none' },
                        ticks: { stroke: 'none' },
                        grid: { stroke: '#a5a0aa', strokeDasharray: 'none',width:600 },
                    }}
                />
            </>
        );
    };

    return (
        <>
            <div style={{display:'grid',gridTemplateColumns:'2fr 1fr'}}>
                <Calendar parent={'DEVICE'} setDataOfParent={(result)=>setData(result)}/>
                <div>
                    <div id={'Tag'} style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
                        {tagData.map(value=>(
                            <div key={value.name} style={{width:5,
                                height:20,
                                backgroundColor:value.color,
                                borderRadius:value.borderRadius,
                                display:value.display,
                                marginLeft:value.margin}}/>
                        ))}
                    </div>
                    <div id={'Tag'} style={{display:'grid',gridTemplateColumns:'repeat(3,50px)',gridGap:50}}>
                        {tagData.map(value =>(
                            <span key={value.name} onClick={()=>handleClickTag(value.name)}>{value.name}</span>
                        ))}
                    </div>
                </div>
            </div>
            <Toast parent={'DEVICE'} parentData={data} color={'primary'}/>
            <div style={{ width: 900, height: 400, paddingLeft: 20, paddingTop: 20 }}>
                <svg style={{
                    padding: 0,
                    fontFamily: '\'Fira Sans\', sans-serif',
                }} viewBox='0 0 800 300'>
                    {tickValueData.length>0&&configAxis()}
                    {line}
                </svg>
            </div>

        </>
    );

};

export default Device;
