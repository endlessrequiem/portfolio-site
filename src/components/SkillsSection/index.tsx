"use client";

import React from "react";

type SkillsSectionProps = {
    title: string;
    listItems: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({title, listItems}) => {
    return (
        <>
            <h2 className="section-header-blur" style={{
                paddingLeft: "24px",
                marginBottom: "24px",
            }}>{title}</h2>
            <div className="blur-effect" style={{
                padding: "24px",
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                alignItems: "flex-start",
                justifyContent: "center",
            }}>
                {listItems.map((skill, index) => (
                    <div
                        key={index}
                        style={{
                            background: "rgba(255, 255, 255, 0.08)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            borderRadius: "20px",
                            padding: "8px 16px",
                            fontSize: "14px",
                            fontFamily: "var(--font-geist-mono)",
                            color: "#ffffff",
                            cursor: "default",
                            transition: "all 0.2s ease-in-out",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            userSelect: "none",
                        }}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </>
    )
}
