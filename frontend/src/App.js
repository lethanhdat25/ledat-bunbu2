import './App.css';
import {useSelector} from "react-redux";
import {toast, Toaster} from "react-hot-toast";
import DeviceByHour from "./components/DeviceByHour";

function App() {
    const store=useSelector(state=>state);
    const renderToast=()=>{
        if (store.device_by_hour.success)  toast.success('Successfully created!');
        if (store.device_by_hour.failed) toast.error(store.ranking.failed);
        return true;
    }
    console.log(store.device_by_hour.data)
    return(
        <>
            {renderToast()}
            {store.device_by_hour.pending && <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>}
            <DeviceByHour/>

            <Toaster/>

        </>
    )
};

export default App;
