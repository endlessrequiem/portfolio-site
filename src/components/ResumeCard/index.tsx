import React from "react";


type ResumeCardProps = {
    title: string;
    company: string;
    listItems: string[];
}


export const ResumeCard: React.FC<ResumeCardProps> = ({title, company, listItems}) => {
    return (
        <view style={{border: "1px solid white", borderRadius: "10px", padding: "10px"}}>
            <h2>{title} @ {company}</h2>
            <ul>
                {listItems.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </view>
    )
}

