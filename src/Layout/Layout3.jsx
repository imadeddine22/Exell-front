import { Outlet } from 'react-router-dom';
import Header3 from '../Components/Header/Header3';
import Footer2 from '../Components/Footer/Footer2';

const Layout3 = () => {
    return (
        <div className='main-page-area2'>
            <Header3></Header3>
            <Outlet></Outlet>
            <Footer2></Footer2>
        </div>
    );
};

export default Layout3;