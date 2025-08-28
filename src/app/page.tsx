import styles from "./page.module.css";
import {strings} from "./page.strings";
import {PageHeader} from "@/components/PageHeader";
import {SkillsSection} from "@/components/SkillsSection";
import React from "react";
import {ExperienceSection} from "@/components/ExperienceSection";
import {workExperience} from "@/const/experience";
import {EducationSection} from "@/components/EducationSection";
import {AboutMeSection} from "@/components/AboutMe";
import {FooterSection} from "@/components/FooterSection";
import {githubFooter, linkedInFooter} from "@/const/footer";
import {ProjectSection} from "@/components/ProjectSection";
import {projects} from "@/const/projects";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <PageHeader title={strings.header} subTitle={strings.jobTitle} content={strings.subHeader}/>
                <hr className={styles.divider}/>
                <AboutMeSection title={strings.aboutMeTitle}/>
                <hr className={styles.divider}/>
                <ExperienceSection header={strings.experienceHeader} workExperience={workExperience}/>
                <hr className={styles.divider}/>
                <ProjectSection projects={projects} sectionTitle={strings.projectsHeader}/>
                <hr className={styles.divider}/>
                <SkillsSection title={strings.skillsHeader} listItems={strings.skills}/>
                <hr className={styles.divider}/>
                <EducationSection
                    sectionTitle={strings.educationHeader}
                    university={strings.university}
                    classOf={strings.classOf}
                    degree={strings.degree}
                    extracurricularsTitle={strings.extracurriculars}
                    activities={strings.activities}
                />
            </main>
            <footer className={styles.footer} style={{paddingTop: 12}}>
                <FooterSection items={[linkedInFooter, githubFooter]}/>
            </footer>
        </div>
    );
}
