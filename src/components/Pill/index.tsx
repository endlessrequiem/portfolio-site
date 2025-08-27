import React from "react";


export type PillProps = {
    text: string;
    index?: number;
    textSize?: "small" | "medium" | "large";
}

export const Pill: React.FC<PillProps> = ({text, index, textSize}) => {
    const fontSize = () => {
        if (textSize === "medium") {
            return "18px"
        } else if (textSize === "large") {
            return "24px"
        } else {
            return "14px";
        }
    }

    return (
        <>
            <div
                key={index}
                style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "20px",
                    padding: "8px 16px",
                    fontSize: fontSize(),
                    fontFamily: "var(--font-geist-mono)",
                    color: "#ffffff",
                    cursor: "default",
                    transition: "all 0.2s ease-in-out",
                    userSelect: "none",
                }}
            >
                {text}
            </div>
        </>
    );

}
