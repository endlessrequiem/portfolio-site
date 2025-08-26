"use client";

import React, { useState } from "react";
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
    const [expandedImage, setExpandedImage] = useState<number | null>(null);

    const handleImageClick = (index: number) => {
        setExpandedImage(expandedImage === index ? null : index);
    };

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
                        width: expandedImage === index ? "80%" : "33%",
                        marginLeft: "10px",
                        marginRight: "10px",
                        marginTop: expandedImage === index ? "48px" : "10px",
                        marginBottom: "48px",
                        padding: "5px",
                        cursor: "pointer",
                        transition: "all 0.3s ease-in-out",
                        zIndex: expandedImage === index ? 10 : 1,
                        position: expandedImage === index ? "relative" : "static",
                    }}
                    onClick={() => handleImageClick(index)}
                    onMouseEnter={(e) => {
                        if (expandedImage !== index) {
                            e.currentTarget.style.transform = "scale(1.05)";
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (expandedImage !== index) {
                            e.currentTarget.style.transform = "scale(1)";
                        }
                    }}
                />
            ))}
        </view>
    )
})
