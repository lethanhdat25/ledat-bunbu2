import './App.css';
import DeviceSummary from "./Component/DeviceSummary";
import {useSelector} from "react-redux";

function App() {
    const store = useSelector(state => state.deviceSummary);
    return (
        <div className="App">
            <DeviceSummary/>
            {store.status === "LOADING" && <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>}

        </div>
    );
}

export default App;
