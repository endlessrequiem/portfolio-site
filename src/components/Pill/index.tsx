import React from "react";


export type PillProps = {
    text: string;
    index?: number;
}

export const Pill: React.FC<PillProps> = ({text, index}) => {
    return (
        <>
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
                {text}
            </div>
        </>
    );

}
