const victoryRouter=require("./victory");
const bunbuRouter=require("./bunbu");
function route(app){
    app.use("/victory",victoryRouter);
    app.use("/",bunbuRouter);
}
module.exports=route;