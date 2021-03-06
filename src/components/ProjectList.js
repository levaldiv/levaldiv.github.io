import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
    const projects = [
        {
            name: 'Portfolio',
            url: 'https://levaldiv.com/',
            github: 'https://github.com/levaldiv/levaldiv.github.io',
            languages: 'SASS, JavaScript, CSS',
            description: 
                'Built a portfolio website similar to LinkTree',
        },
    ];
    return (
        <div className="py-3 d-flex flex-column justify-content-center align-items-center align-content-center">
            <h2 style={{color: 'white'}}>What I have been working on</h2>
            <div className="container ">
                <div className="row justify-content-center">
                    {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        url={project.url}
                        name={project.name}
                        github={project.github}
                        languages={project.languages}
                        description={project.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectList;