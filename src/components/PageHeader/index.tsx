import React from "react";


type PageHeaderProps = {
    title: string;
    subTitle: string;
}


export const PageHeader: React.FC<PageHeaderProps> = ({title, subTitle}) => {
    return (
        <view style={{border: "1px solid white", borderRadius: "10px", padding: "10px", textAlign: "center"}}>
            <h1>{title}</h1>
            <span>{subTitle}</span>
        </view>
    )
}
