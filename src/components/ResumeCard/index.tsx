import React from "react";


type ResumeCardProps = {
    title: string;
    company: string;
    listItems: string[];
}


export const ResumeCard: React.FC<ResumeCardProps> = ({title, company, listItems}) => {
    return (
        <view className="blur-effect" style={{padding: "20px"}}>
            <h2>{title} @ {company}</h2>
            <ul>
                {listItems.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </view>
    )
}

