import React from "react";
import {strings} from "@/app/page.strings";

type AboutMeSectionProps = {
    title: string;
}

export const AboutMeSection: React.FC<AboutMeSectionProps> = ({title}) => {
    return (
        <>
            <h2>{title}</h2>
            <view style={{
                border: "1px solid white",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "left",
            }}>
                {strings.aboutMeText}
            </view>
        </>
    )
}
