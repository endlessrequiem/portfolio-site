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
    projectImages: string[];
}

//TODO Add title to strings
export const ProjectSection: React.FC<ProjectSectionProps> = ({projects}: ProjectSectionProps) => {
    return (
        <>
            <h2>Highlighted Projects</h2>
            {projects.map((project, index) => (
                <ProjectComponent project={project} key={index}/>
            ))}
        </>
    )
}

const ProjectComponent: React.FC<ProjectComponentProps> = ((current) => {
    const {projectName, projectDescription, projectImages} = current.project;

    return (
        <view style={{
            border: "1px solid white",
            borderRadius: "10px",
            padding: "10px",
        }}>
            <h2>{projectName}</h2>
            <h4>{projectDescription}</h4>
            {projectImages.map((image, index) => (
                <img
                    src={image}
                    alt={projectName}
                    key={index}
                    style={{
                        width: "33%",
                        marginLeft: "10px",
                        marginRight: "10px",
                        marginTop: "10px",
                        border: "1px solid white",
                        borderRadius: "10px",
                    }}
                />
            ))}

        </view>
    )
})
