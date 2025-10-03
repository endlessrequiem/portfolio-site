import React from "react";


export default function Divider() {
    return (
        <hr style={{
            width: "100%",
            height: "2px",
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
            border: "none",
            margin: "20px 0"
        }}/>);
}
