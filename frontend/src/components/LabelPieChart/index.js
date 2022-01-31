import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import { useState } from 'react';
import _ from 'lodash';
import { getDeviceType } from '../../store/slice/device_type';
import { useDispatch } from 'react-redux';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const LabelPieChart = () => {
    const [dataOS, setDataOS] = useState([]);
    const dispatch=useDispatch();
    const data = [
        { x: 'Android', y: _.random(0, 100) },
        { x: 'Windows', y: _.random(0, 100) },
        { x: 'Ios', y: _.random(0, 100) },
        { x: 'Os X', y: _.random(0, 100) },
        { x: 'Unknown', y: _.random(0, 100) },
        { x: 'Linux', y: _.random(0, 100) }
    ];

    const handleChange = (event) => {

        const {
            target: { value },
        } = event;

        setDataOS(value);
    };
    const handleClose=()=>{
        console.log(dataOS);
        return  dispatch(getDeviceType(dataOS));
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id='demo-multiple-checkbox-label'>Tag</InputLabel>
                <Select
                    labelId='demo-multiple-checkbox-label'
                    id='demo-multiple-checkbox'
                    multiple
                    value={dataOS}
                    onChange={handleChange}
                    input={<OutlinedInput label='Tag' />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    onClose={handleClose}
                >
                    {data.map((value) => (
                        <MenuItem key={value.x} value={value.x}>
                            <ListItemText primary={value.x} />
                            <Checkbox checked={dataOS.indexOf(value.x) > -1} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );

};

export default LabelPieChart;
