import React from "react";
import {FooterLink} from "~/components/FooterLink";

type FooterSectionProps = {
    items: FooterItem[];
}

export type FooterItem = {
    text: string;
    link: string;
    icon: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({items}) => {
    return (
        items.map(
            (item, index) =>
                <FooterLink key={index} text={item.text} link={item.link} icon={item.icon}/>
        )
    )
}
