import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Contact3 from '../Components/Contact/Contact3';

const ContactPage = () => {
    return (
        <div>
              <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Contact Us"
            ></BreadCumb>       
            <Contact3></Contact3>    
        </div>
    );
};

export default ContactPage;