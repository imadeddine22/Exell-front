import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Team3 from '../Components/Team/Team3';

const TeamPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Team"
            ></BreadCumb> 
            <Team3></Team3>           
        </div>
    );
};

export default TeamPage;