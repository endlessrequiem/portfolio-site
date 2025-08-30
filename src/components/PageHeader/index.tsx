import React from "react";
import {Pill} from "@/components/Pill";

type PageHeaderProps = {
    title: string;
    subTitle: string;
    content: string[];
}


export const PageHeader: React.FC<PageHeaderProps> = ({title, subTitle, content}) => {
    return (
        <view className="liquid-glass" style={{padding: "20px", textAlign: "center", marginTop: "16px"}}>
            <h1 style={{marginBottom: "12px"}}>{title}</h1>
            <h3 style={{marginBottom: "6px"}}>{subTitle}</h3>
            <div style={{
                padding: "24px",
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                alignItems: "flex-start",
                justifyContent: "center",
            }}>
                {content.map((text, index) => (
                    <Pill text={text} index={index} key={index}/>
                ))}
            </div>
        </view>
    )
}
