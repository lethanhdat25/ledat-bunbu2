import { VictoryPie } from 'victory';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchDeviceSummary,
    fetchDeviceSummaryFailed,
    fetchDeviceSummarySuccess,
} from '../../store/slice/device_summary';
import { deviceSummaryApi } from '../../api/device_summary';

const DeviceSummary = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state.deviceSummary);

    useEffect(() => {
        const fetchData = async () => {
            dispatch(fetchDeviceSummary());
            await deviceSummaryApi.getDeviceSummary()
                .then(rs => {
                    dispatch(fetchDeviceSummarySuccess(rs.data));
                })
                .catch(err => dispatch(fetchDeviceSummaryFailed(err.message)));
        };
        fetchData();

    }, []);

    const getKey = Object.keys(store.data);

    const pieData = getKey.map(value => ({
            x: value,
            y: store.data[value],
        }),
    );

    return (
        <div style={{ width: 400, height: 400, margin: 'auto' }}>
            <VictoryPie
                colorScale={store.data.length !== 0 ? 'qualitative' : ['gray']}
                data={store.data.length !== 0 ? pieData : null}
                style={{ labels: { padding: 5 } }}
                labels={({ datum }) => store.data.length === 0 ? '' : datum.xName}
            />
        </div>
    );

};

export default DeviceSummary;
