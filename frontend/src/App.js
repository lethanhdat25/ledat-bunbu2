import './App.css';
import DeviceByHour from './components/DeviceByHour';
import DeviceType from './components/DeviceType';
import Device from './components/Device';
import Ranking from './components/Ranking';

function App() {
    return (
        <>
            <div className={'analysis'}>
                <div style={{ backgroundColor: 'white', marginTop: 20, marginLeft: 20 }}>
                    <DeviceType />
                </div>
                <div style={{ backgroundColor: 'white', marginTop: 20, marginRight: 20 }}>
                    <Device />
                </div>
                <div style={{ backgroundColor: 'white', marginBottom: 20, marginLeft: 20 }}>
                    <Ranking />
                </div>
                <div style={{ backgroundColor: 'white', marginRight: 20, marginBottom: 20 }}>
                    <DeviceByHour />
                </div>
            </div>

        </>
    );
}

export default App;
