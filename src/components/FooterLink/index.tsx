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
        <>
            {Icon}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </a>
        </>
    )
}

function getIcon(icon: string) {
    const iconSize = 20;

    if (icon === "github") {
        return <IoLogoGithub size={iconSize} style={{alignSelf: "center"}}/>;
    } else if (icon === "linkedin") {
        return <FaLinkedin size={iconSize} style={{alignSelf: "center"}}/>;
    } else {
        return null;
    }
}
