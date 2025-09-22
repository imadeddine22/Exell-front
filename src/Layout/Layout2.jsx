import { Outlet } from 'react-router-dom';
import Footer2 from '../Components/Footer/Footer2';
import Header2 from '../Components/Header/Header2';

const Layout2 = () => {
    return (
        <div className='main-page-area2'>
            <Header2></Header2>
            <Outlet></Outlet>
            <Footer2></Footer2>
        </div>
    );
};

export default Layout2;