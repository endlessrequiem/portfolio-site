import React from "react";

type ProjectSectionProps = {
    projects: Project[];
}

type ProjectComponentProps = {
    project: Project;
}


export type Project = {
    projectName: string;
    projectDescription: string;
    projectImage: string;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({projects}: ProjectSectionProps) => {
    return (
        <>
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <ProjectComponent project={project} key={index}/>
            ))}
        </>
    )
}

//TODO Update image styling
const ProjectComponent: React.FC<ProjectComponentProps> = ((current) => {
    const {projectName, projectDescription, projectImage} = current.project;

    return (
        <view style={{border: "1px solid white", borderRadius: "10px", padding: "10px"}}>
            <h2>{projectName}</h2>
            <span>{projectDescription}</span>
            <img
                src={projectImage}
                alt="project"
                style={{width: "25%"}}
            />
        </view>
    )
})
