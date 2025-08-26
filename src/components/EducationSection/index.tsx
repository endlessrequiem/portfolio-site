import React from "react";
import {strings} from "@/app/page.strings";

export const EducationSection: React.FC = () => {
    return (
        <>
            <h2>{strings.educationHeader}</h2>
            <view className="blur-effect" style={{
                padding: "20px",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between"
                }}>
                    <h2>{strings.university}</h2>
                    <h3>{strings.classOf}</h3>
                </div>
                <h3>{strings.degree}</h3>
                <div style={{marginTop: "24px",}}>
                    <h4>{strings.extracurriculars}</h4>
                    <ul>
                        {strings.activities.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </div>
            </view>
        </>
    )
}
