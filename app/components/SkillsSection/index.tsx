import React from "react";
import {Pill} from "~/components/Pill";
import {SectionHeader} from "~/components/SectionHeader";

type SkillsSectionProps = {
    title: string;
    listItems: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({title, listItems}) => {
    return (
        <>
            <SectionHeader title={title}/>
            <div className="liquid-glass" style={{
                padding: "24px",
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                alignItems: "flex-start",
                justifyContent: "center",
            }}>
                {listItems.map((skill, index) => (
                    <Pill text={skill} index={index} key={index}/>
                ))}
            </div>
        </>
    )
}
