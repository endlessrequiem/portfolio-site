import React from "react";
import {strings} from "@/app/page.strings";

type AboutMeSectionProps = {
    title: string;
}

export const AboutMeSection: React.FC<AboutMeSectionProps> = ({title}) => {
    return (
        <>
            <h2 className="section-header-blur" style={{
                paddingLeft: "24px",
                paddingRight: "24px",
            }}>{title}</h2>
            <view className="liquid-glass" style={{
                padding: "20px",
                textAlign: "left",
            }}>
                {strings.aboutMeText}
            </view>
        </>
    )
}
