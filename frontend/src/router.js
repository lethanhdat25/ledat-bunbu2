import { useRoutes } from 'react-router-dom';
import Analysis from './Analysis';
import DeviceType from './components/DeviceType';

export default function Router(){
    return useRoutes([
        {
            path:'/',
            children:[
                {path:'/',element:<Analysis/> },
                {path:'/analysis',element:<Analysis/>},
                {path:'/device_list',element:
                        <div style={{width:800,height:472,margin:'auto',float:'none'}}>
                            <DeviceType/>
                        </div>
                },
            ]
        },
    ]);
}
