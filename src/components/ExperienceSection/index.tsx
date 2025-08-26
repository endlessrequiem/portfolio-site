import React from "react";
import {ResumeCard} from "@/components/ResumeCard";


type ExperienceSectionProps = {
    header: string;
    workExperience: Experience[];
}

export type Experience = {
    title: string;
    company: string;
    listItems: string[];
}


export const ExperienceSection: React.FC<ExperienceSectionProps> = ({header, workExperience}) => {
    return (
        <>
            <h2 className="section-header-blur" style={{
                paddingLeft: "24px",
            }}>{header}</h2>
            {workExperience.map((item, index) => <ResumeCard key={index} {...item} />)}
        </>
    )
}
