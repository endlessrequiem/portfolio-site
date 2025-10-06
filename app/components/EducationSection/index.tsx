import React from "react";
import {Pill} from "~/components/Pill";
import {SectionHeader} from "~/components/SectionHeader";

export type EducationSectionProps = {
    sectionTitle: string;
    university: string;
    classOf: string;
    degree: string;
    extracurricularsTitle: string;
    activities: string[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({
                                                                      sectionTitle,
                                                                      university,
                                                                      classOf,
                                                                      degree,
                                                                      extracurricularsTitle,
                                                                      activities,
                                                                  }) => {
    return (
        <>
            <SectionHeader title={sectionTitle}/>
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
                            margin: "0"
                        }}>{university}</h2>
                        <Pill text={classOf}/>
                    </div>
                    <h3 style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        margin: "0",
                    }}>{degree}</h3>
                </div>

                {/* Extracurriculars Section */}
                <div>
                    <h4 style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        margin: "0 0 16px 0",
                    }}>{extracurricularsTitle}</h4>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "12px"
                    }}>
                        {activities.map((item, index) => (
                            <Pill text={item} index={index} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
