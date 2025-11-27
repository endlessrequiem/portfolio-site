import {strings} from "~/const/strings";
import {PageHeader} from "~/components/PageHeader";
import {SkillsSection} from "~/components/SkillsSection";
import React from "react";
import {ExperienceSection} from "~/components/ExperienceSection";
import {workExperience} from "~/const/experience";
import {EducationSection} from "~/components/EducationSection";
import {AboutMeSection} from "~/components/AboutMe";
import {FooterSection} from "~/components/FooterSection";
import {githubFooter, linkedInFooter} from "~/const/footer";
import {ProjectSection} from "~/components/ProjectSection";
import {projects} from "~/const/projects";
import Divider from "~/components/Divider";

export default function Home() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingBottom: "60px",
            gap: "12px",
        }}>
            <main style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                gridRowStart: "2"
            }}>
                <PageHeader title={strings.header} subTitle={strings.jobTitle} content={strings.subHeader}/>
                <Divider/>
                <AboutMeSection title={strings.aboutMeTitle}/>
                <Divider/>
            </main>
            <footer style={{
                marginTop: "72px",
                gridRowStart: "3",
                display: "flex",
                gap: "24px",
                paddingTop: "12px"
            }}>
                <FooterSection items={[linkedInFooter, githubFooter]}/>
            </footer>
        </div>
    );
}
