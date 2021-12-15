import {VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme} from "victory";

const Victory1=()=>{
    const data = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
    ];
    const data2012 = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
    ];

    return (
        <div className="App">
            <VictoryChart domainPadding={20} theme={VictoryTheme.material} >
                <VictoryAxis  tickFormat={["aa","bb","cc"]}/>
                <VictoryAxis
                    dependentAxis={true}
                    tickFormat={(x) => (`$${x / 1000}k`)}
                />
                <VictoryStack colorScale={"cool"}>
                    <VictoryBar data={data} x="quarter" y="earnings"/>
                    <VictoryBar data={data2012} x="quarter" y="earnings"/>
                </VictoryStack>
            </VictoryChart>
        </div>
    );
};

export default Victory1;
