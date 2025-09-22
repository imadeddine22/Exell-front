import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import ProjectDetails from '../Components/ProjectDetails/ProjectDetails';

const ProjectDetailsPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Project Details"
            ></BreadCumb>      
            <ProjectDetails></ProjectDetails>        
        </div>
    );
};

export default ProjectDetailsPage;