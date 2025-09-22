import React from 'react';
import Faq1 from '../Components/Faq/Faq1';
import BreadCumb from '../Components/Common/BreadCumb';

const FaqPage = () => {
    return (
        <div>
               <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="FAQ’s"
            ></BreadCumb>    
            <Faq1></Faq1>        
        </div>
    );
};

export default FaqPage;