import victoryRouter from './victory.js';
import deviceSummaryRouter from'./deviceSummary.js';
import deviceRouter from './device.js';
import rankingRouter from './ranking.js';
import deviceByHourRouter from './deviceByHour.js';
import deviceTypeRouter from './deviceType.js';

function route(app){
    app.use('/victory',victoryRouter);
    app.use('/device_summary',deviceSummaryRouter);
    app.use('/device',deviceRouter);
    app.use('/ranking',rankingRouter);
    app.use('/device_by_hour',deviceByHourRouter);
    app.use('/device_type',deviceTypeRouter);
}

export default route;