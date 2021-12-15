const victoryRouter=require("./victory");
const deviceSummaryRouter=require("./deviceSummary");

function route(app){
    app.use("/victory",victoryRouter);
    app.use("/",deviceSummaryRouter);
};

module.exports=route;
