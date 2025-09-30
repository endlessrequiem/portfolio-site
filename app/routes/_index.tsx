import type { MetaFunction } from "@remix-run/node";
import { strings } from "./page.strings";
import { PageHeader } from "~/components/PageHeader";
import { SkillsSection } from "~/components/SkillsSection";
import React from "react";
import { ExperienceSection } from "~/components/ExperienceSection";
import { workExperience } from "~/const/experience";
import { EducationSection } from "~/components/EducationSection";
import { AboutMeSection } from "~/components/AboutMe";
import { FooterSection } from "~/components/FooterSection";
import { githubFooter, linkedInFooter } from "~/const/footer";
import { ProjectSection } from "~/components/ProjectSection";
import { projects } from "~/const/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Austin White, Software Engineer" },
    { name: "description", content: "Portfolio of Austin White, Software Engineer" },
  ];
};

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      paddingLeft: "80px",
      paddingRight: "80px",
      paddingBottom: "60px",
      gap: "12px",
      fontFamily: "var(--font-geist-sans)",
      color: "#ffffff"
    }}>
      <main style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        gridRowStart: "2"
      }}>
        <PageHeader title={strings.header} subTitle={strings.jobTitle} content={strings.subHeader}/>
        <hr style={{
          width: "100%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
          border: "none",
          margin: "20px 0"
        }}/>
        <AboutMeSection title={strings.aboutMeTitle}/>
        <hr style={{
          width: "100%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
          border: "none",
          margin: "20px 0"
        }}/>
        <ExperienceSection header={strings.experienceHeader} workExperience={workExperience}/>
        <hr style={{
          width: "100%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
          border: "none",
          margin: "20px 0"
        }}/>
        <ProjectSection projects={projects} sectionTitle={strings.projectsHeader}/>
        <hr style={{
          width: "100%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
          border: "none",
          margin: "20px 0"
        }}/>
        <SkillsSection title={strings.skillsHeader} listItems={strings.skills}/>
        <hr style={{
          width: "100%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
          border: "none",
          margin: "20px 0"
        }}/>
        <EducationSection
          sectionTitle={strings.educationHeader}
          university={strings.university}
          classOf={strings.classOf}
          degree={strings.degree}
          extracurricularsTitle={strings.extracurriculars}
          activities={strings.activities}
        />
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
