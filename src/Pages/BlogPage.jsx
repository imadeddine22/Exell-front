import React from 'react';
import Blog4 from '../Components/Blog/Blog4';
import BreadCumb from '../Components/Common/BreadCumb';

const BlogPage = () => {
    return (
        <div>
               <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Blog"
            ></BreadCumb>     
            <Blog4></Blog4>       
        </div>
    );
};

export default BlogPage;