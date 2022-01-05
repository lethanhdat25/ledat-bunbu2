const victoryRouter=require("./victory");
const deviceSummaryRouter=require("./deviceSummary");
const deviceTypeRouter=require("./deviceType");
const deviceRouter=require("./device");
const rankingRouter=require("./ranking");
const deviceByHourRouter=require("./deviceByHour");

function route(app){
    app.use("/victory",victoryRouter);
    app.use("/device_summary",deviceSummaryRouter);
    app.use("/device_type",deviceTypeRouter);
    app.use("/device",deviceRouter);
    app.use("/ranking",rankingRouter);
    app.use("/device_by_hour",deviceByHourRouter);
}

module.exports=route;
