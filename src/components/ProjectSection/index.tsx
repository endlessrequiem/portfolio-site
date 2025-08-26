import React from "react";
import {strings} from "@/app/page.strings";

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

export const ProjectSection: React.FC<ProjectSectionProps> = ({projects}: ProjectSectionProps) => {
    return (
        <>
            <h2 className="section-header-blur" style={{
                paddingLeft: "24px",
            }}>{strings.projectsHeader}</h2>
            {projects.map((project, index) => (
                <ProjectComponent project={project} key={index}/>
            ))}
        </>
    )
}

const ProjectComponent: React.FC<ProjectComponentProps> = ((current) => {
    const {projectName, projectDescription, projectImages} = current.project;

    return (
        <view className="blur-effect" style={{
            padding: "20px",
            justifyContent: "space-between",
            flex: 1,
            textAlign: "center",
        }}>
            <h2>{projectName}</h2>
            <h4>{projectDescription}</h4>
            {projectImages.map((image, index) => (
                <img
                    src={image}
                    alt={projectName}
                    key={index}
                    className="blur-effect"
                    style={{
                        width: "33%",
                        marginLeft: "10px",
                        marginRight: "10px",
                        marginTop: "10px",
                        padding: "5px",
                    }}
                />
            ))}

        </view>
    )
})
