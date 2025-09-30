import React, {FC} from "react";

export type SectionHeaderProps = {
    title: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({title}) => {
    return (
        <h2 className="section-header-blur" style={{
            paddingLeft: "24px",
            paddingRight: "24px",
            alignSelf: "center",
        }}>
            {title}
        </h2>
    )
}
