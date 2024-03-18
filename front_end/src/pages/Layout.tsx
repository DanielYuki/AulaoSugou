import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Layout(){
    return (
        <div className='w-[100vw] md:h-[100vh] md:flex md:flex-col lg:h-[100vh] lg:flex lg:flex-col overflow-y-auto overflow-x-hidden relative'>
            <Header />
            <Outlet />
        </div>
    )
}