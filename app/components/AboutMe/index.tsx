import React from "react";
import {strings} from "~/const/strings";
import {SectionHeader} from "~/components/SectionHeader";

type AboutMeSectionProps = {
    title: string;
}

export const AboutMeSection: React.FC<AboutMeSectionProps> = ({title}) => {
    return (
        <>
            <SectionHeader title={title}/>
            <div className="liquid-glass" style={{
                padding: "20px",
                textAlign: "center",
            }}>
                {strings.aboutMeText}
            </div>
        </>
    )
}
