import React from "react";
import {strings} from "~/routes/page.strings";
import {SectionHeader} from "~/components/SectionHeader";

type AboutMeSectionProps = {
    title: string;
}

export const AboutMeSection: React.FC<AboutMeSectionProps> = ({title}) => {
    return (
        <>
            <SectionHeader title={title}/>
            <view className="liquid-glass" style={{
                padding: "20px",
                textAlign: "left",
            }}>
                {strings.aboutMeText}
            </view>
        </>
    )
}
