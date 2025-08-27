"use client";
import React from "react";
import {strings} from "@/app/page.strings";
import {Pill} from "@/components/Pill";

export const EducationSection: React.FC = () => {
    return (
        <>
            <h2 className="section-header-blur" style={{
                paddingLeft: "24px",
                paddingRight: "24px",
            }}>{strings.educationHeader}</h2>
            <div className="liquid-glass" style={{
                padding: "24px",
            }}>
                {/* University and Degree Section */}
                <div style={{
                    marginBottom: "24px",
                    paddingBottom: "20px",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "8px"
                    }}>
                        <h2 style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#ffffff",
                            margin: "0"
                        }}>{strings.university}</h2>
                        <Pill text={strings.classOf}/>
                    </div>
                    <h3 style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "rgba(255, 255, 255, 0.9)",
                        margin: "0",
                        fontFamily: "var(--font-geist-mono)"
                    }}>{strings.degree}</h3>
                </div>

                {/* Extracurriculars Section */}
                <div>
                    <h4 style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#ffffff",
                        margin: "0 0 16px 0",
                        fontFamily: "var(--font-geist-mono)"
                    }}>{strings.extracurriculars}</h4>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "12px"
                    }}>
                        {strings.activities.map((item, index) => (
                            <Pill text={item} index={index} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
