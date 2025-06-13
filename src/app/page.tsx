import styles from "./page.module.css";
import {strings} from "./page.strings";
import {PageHeader} from "@/components/PageHeader";
import {SkillsSection} from "@/components/SkillsSection";
import React from "react";
import {ExperienceSection} from "@/components/ExperienceSection";
import {workExperience} from "@/util/experience";
import {EducationSection} from "@/components/EducationSection";
import {AboutMeSection} from "@/components/AboutMe";
import {FooterSection} from "@/components/FooterSection";
import {githubFooter, linkedInFooter} from "@/util/footer";
import {ProjectSection} from "@/components/ProjectSection";
import {projects} from "@/util/projects";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <PageHeader title={strings.header} subTitle={strings.subHeader}/>
                <AboutMeSection title={strings.aboutMeTitle}/>
                <ExperienceSection header={strings.experienceHeader} workExperience={workExperience}/>
                <ProjectSection projects={projects}/>
                <SkillsSection title={strings.skillsHeader} listItems={strings.skills}/>
                <EducationSection/>
            </main>
            <footer className={styles.footer} style={{paddingTop: 12}}>
                <FooterSection items={[linkedInFooter, githubFooter]}/>
            </footer>
        </div>
    );
}
