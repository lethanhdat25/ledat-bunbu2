const victoryRouter=require("./victory");
const deviceSummaryRouter=require("./deviceSummary");
const rankingRouter=require("./ranking");
const deviceByHourRouter=require("./deviceByHour");

function route(app){
    app.use("/victory",victoryRouter);
    app.use("/device_summary",deviceSummaryRouter);
    app.use("/ranking",rankingRouter);
    app.use("/device_by_hour",deviceByHourRouter);
}

module.exports=route;
