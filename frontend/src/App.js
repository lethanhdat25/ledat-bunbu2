import './App.css';
import Ranking from "./components/Ranking";
import {useSelector} from "react-redux";
import {toast, Toaster} from "react-hot-toast";
function App() {
    const store=useSelector(state=>state);
    const renderToast=()=>{
        if (store.ranking.success)  toast.success('Successfully created!');
        if (store.ranking.failed) toast.error(store.ranking.failed);
        return true;
    }
    return(
        <>
            {renderToast()}
            <Ranking/>
            {store.ranking.pending && <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>}
            <Toaster/>

        </>

    )
}

export default App;
