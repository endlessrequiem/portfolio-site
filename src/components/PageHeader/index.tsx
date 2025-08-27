import React from "react";


type PageHeaderProps = {
    title: string;
    subTitle: string;
}


export const PageHeader: React.FC<PageHeaderProps> = ({title, subTitle}) => {
    return (
        <view className="liquid-glass" style={{padding: "20px", textAlign: "center"}}>
            <h1 style={{marginBottom: "12px"}}>{title}</h1>
            <span>{subTitle}</span>
        </view>
    )
}
