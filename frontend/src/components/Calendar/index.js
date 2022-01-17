import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { getRanking } from '../../store/slice/ranking';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getDeviceByHour } from '../../store/slice/device_by_hour';
import { getDevice } from '../../store/slice/device';
import { getDeviceType } from '../../store/slice/device_type';

const Calendar = (props) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [error, setError] = useState(false);
    const [focusedInput, setFocusedInput] = useState(null);
    const dispatch = useDispatch();
    const typeOfDispatch=()=>{
        switch (props.parent){
            case 'RANKING':{
                return dispatch(getRanking({startDate,endDate}));
            }
            case 'DEVICE_BY_HOUR':{
                return dispatch(getDeviceByHour({startDate,endDate}));
            }
            case 'DEVICE':{
                return dispatch(getDevice({startDate,endDate}));
            }
            case 'DEVICE_TYPE':{
                return dispatch(getDeviceType({startDate,endDate}));
            }
        }
    };
    const handleCalendarClick=async()=>{
        if (startDate&&endDate){
            try {
                const res = await typeOfDispatch();
                props.setDataOfParent(res.payload);
                unwrapResult(res);
            } catch (e) {
                console.log(e);
            }
        }
        else{
            setError(true);
        }
    };
    useEffect(()=>{
        setTimeout(()=>setError(false),2000);
    },[error]);
    return (
        <>
            <DateRangePicker
                startDateId='startDate'
                endDateId='endDate'
                startDate={startDate}
                endDate={endDate}
                onDatesChange={({ startDate, endDate }) => {
                    setStartDate(startDate);
                    setEndDate(endDate);
                }}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => {
                    setFocusedInput(focusedInput);
                }}
                showDefaultInputIcon
                numberOfMonths={1}
                autoFocus
            />
            <Button style={{marginLeft:20}} onClick={handleCalendarClick} variant='contained' size='small'>OK</Button>
            {error&&<span style={{marginLeft:10,color:'red'}}>Bạn phải nhập đầy đủ thông tin!</span>}
        </>
    );
};
export default Calendar;
