"use client";
import React from "react";
import {strings} from "@/app/page.strings";

export const EducationSection: React.FC = () => {
    return (
        <>
            <h2 className="section-header-blur" style={{
                paddingLeft: "24px",
            }}>{strings.educationHeader}</h2>
            <div className="blur-effect" style={{
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
                        <span style={{
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.8)",
                            fontFamily: "var(--font-geist-mono)",
                            padding: "4px 12px",
                            background: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "12px",
                            border: "1px solid rgba(255, 255, 255, 0.2)"
                        }}>{strings.classOf}</span>
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
                        flexDirection: "column",
                        gap: "12px"
                    }}>
                        {strings.activities.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    background: "rgba(255, 255, 255, 0.05)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    borderRadius: "8px",
                                    padding: "12px 16px",
                                    fontSize: "14px",
                                    fontFamily: "var(--font-geist-mono)",
                                    color: "rgba(255, 255, 255, 0.9)",
                                    transition: "all 0.2s ease-in-out"
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
