import React from "react";
import {ResumeCard} from "@/components/ResumeCard";
import {SectionHeader} from "@/components/SectionHeader";


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
            <SectionHeader title={header}/>
            {workExperience.map((item, index) => <ResumeCard key={index} {...item} />)}
        </>
    )
}
