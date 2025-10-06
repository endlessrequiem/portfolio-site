import React from "react";
import {Pill} from "~/components/Pill";

type ResumeCardProps = {
    title: string;
    company: string;
    listItems: string[];
}

export const ResumeCard: React.FC<ResumeCardProps> = ({title, company, listItems}) => {
    return (
        <div className="liquid-glass" style={{
            padding: "24px",
            marginBottom: "16px",
            position: "relative"
        }}>
            {/* Header Section */}
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
            }}>
                <div>
                    <h2 style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        margin: "0 0 4px 0",
                    }}>{title}</h2>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                    }}>
                        <span style={{
                            fontSize: "16px",
                        }}>@ {company}</span>

                    </div>
                </div>
            </div>

            {/* Achievements List */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px"
            }}>
                {listItems.map((item, index) => (
                    <Pill text={item} index={index} key={index}/>
                ))}
            </div>
        </div>
    )
}
