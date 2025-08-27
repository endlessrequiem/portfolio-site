"use client";

import React from "react";

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
                        color: "#ffffff",
                        margin: "0 0 4px 0",
                        fontFamily: "var(--font-geist-mono)"
                    }}>{title}</h2>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                    }}>
                        <span style={{
                            fontSize: "16px",
                            color: "rgba(255, 255, 255, 0.8)",
                            fontFamily: "var(--font-geist-mono)"
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
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            padding: "12px",
                            background: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            borderRadius: "8px",
                            transition: "all 0.2s ease-in-out"
                        }}
                    >
                        <div style={{
                            width: "6px",
                            height: "6px",
                            background: "rgba(255, 255, 255, 0.6)",
                            borderRadius: "50%",
                            marginTop: "8px",
                            flexShrink: 0
                        }}/>
                        <p style={{
                            fontSize: "14px",
                            lineHeight: "1.5",
                            color: "rgba(255, 255, 255, 0.9)",
                            margin: "0",
                            fontFamily: "var(--font-geist-mono)"
                        }}>
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

