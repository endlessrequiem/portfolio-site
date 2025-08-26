import React from "react";
import {IoLogoGithub} from "react-icons/io";
import {FaLinkedin} from "react-icons/fa";


export type FooterLinkProps = {
    text: string;
    link: string;
    icon: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({text, link, icon}) => {
    const Icon = getIcon(icon);

    return (
        <div 
            className="blur-effect footer-link-hover" 
            style={{
                display: "flex", 
                padding: "10px",
                transition: "all 0.3s ease",
                cursor: "pointer"
            }}
        >
            {Icon}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{transition: "all 0.3s ease"}}
            >
                {text}
            </a>
        </div>
    )
}

function getIcon(icon: string) {
    const iconSize = 20;
    const rightPadding = "5px";

    if (icon === "github") {
        return <IoLogoGithub size={iconSize} style={{alignSelf: "center", paddingRight: rightPadding}}/>;
    } else if (icon === "linkedin") {
        return <FaLinkedin size={iconSize} style={{alignSelf: "center", paddingRight: rightPadding}}/>;
    } else {
        return null;
    }
}
