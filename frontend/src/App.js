import './App.css';
import DeviceSummary from "./Component/DeviceSummary";
import {useSelector} from "react-redux";
import {toast, Toaster} from "react-hot-toast";

function App() {
    const renderToast=()=>{
        if (store.success)  toast.success('Successfully created!');
        if (store.failed) toast.error(store.failed);
        return true;
    }
    const store = useSelector(state => state.deviceSummary);
    return (
        <div className="App">
            <DeviceSummary/>
            {renderToast()}
            {store.pending && <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>}
            <Toaster/>

        </div>
    );
}

export default App;
