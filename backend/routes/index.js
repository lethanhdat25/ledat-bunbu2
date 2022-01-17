const victoryRouter=require("./victory");
const deviceSummaryRouter=require("./deviceSummary");
const deviceRouter=require("./device");
const rankingRouter=require("./ranking");
const deviceByHourRouter=require("./deviceByHour");
const deviceTypeRouter=require("./deviceType");

function route(app){
    app.use("/victory",victoryRouter);
    app.use("/device_summary",deviceSummaryRouter);
    app.use("/device",deviceRouter);
    app.use("/ranking",rankingRouter);
    app.use("/device_by_hour",deviceByHourRouter);
    app.use("/device_type",deviceTypeRouter);
}

module.exports=route;
