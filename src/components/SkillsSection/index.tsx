import React from "react";


type SkillsSectionProps = {
    title: string;
    listItems: string[];
}


export const SkillsSection: React.FC<SkillsSectionProps> = ({title, listItems}) => {
    return (
        <>
            <h2>{title}</h2>
            <view style={{
                border: "1px solid white",
                borderRadius: "10px",
                padding: "15px",
                columns: 3,
                alignItems: "center",
            }}>
                <ul style={{marginTop: "0px"}}>
                    {listItems.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </view>
        </>
    )
}
