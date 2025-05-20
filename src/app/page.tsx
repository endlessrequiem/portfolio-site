import styles from "./page.module.css";
import {strings} from "./page.strings";
import {PageHeader} from "@/components/PageHeader";
import {SkillsSection} from "@/components/SkillsSection";
import React from "react";
import {ExperienceSection} from "@/components/ExperienceSection";
import {workExperience} from "@/util/experience";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <PageHeader title={strings.header} subTitle={strings.subHeader}/>
                <SkillsSection title={strings.skillsHeader} listItems={strings.skills}/>
                <ExperienceSection header={strings.experienceHeader} workExperience={workExperience}/>
            </main>
            <footer className={styles.footer} style={{paddingTop: 12}}>
                <a
                    href="https://www.linkedin.com/in/austinjwhite96/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <span>|</span>
                <a
                    href="https://github.com/endlessrequiem"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </footer>
        </div>
    );
}
