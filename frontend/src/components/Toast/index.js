import { toast, Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const Toast=(props)=>{

    const store=useSelector(state=>{
        switch (props.parent){
            case 'RANKING':{
                return state.ranking;
            }
            case 'DEVICE_BY_HOUR':{
                return state.deviceByHour;
            }
            case 'DEVICE':{
                return state.device;
            }
            case 'DEVICE_TYPE':{
                return state.deviceType;
            }
        }
    });

    useEffect(()=>{
        renderToast();
    },[props.parentData]);

    const renderToast = () => {
        if (store.success) {
            toast.success('Successfully created!');
        }
        if (store.failed) {
            toast.error(store.message);
        }
        return true;
    };

    return(
        <>
            {store.pending &&
            <div className='text-center'>
                <div className={`spinner-border text-${props.color}`} role='status'>
                    <span className='sr-only'>Loading...</span>
                </div>
            </div>
            }
            <Toaster />
        </>
    );

};

export default Toast;
