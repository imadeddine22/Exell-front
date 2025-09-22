import { Outlet } from 'react-router-dom';
import Footer1 from '../Components/Footer/Footer1';
import Header4 from '../Components/Header/Header4';

const Layout4 = () => {
    return (
        <div className='main-page-area'>
            <Header4></Header4>
            <Outlet></Outlet>
            <Footer1></Footer1>
        </div>
    );
};

export default Layout4;