import styles from "./page.module.css";
import {ResumeCard} from "@/components/ResumeCard";
import {strings} from "./page.strings";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <ResumeCard title={strings.engTwoTitle} listItems={[
                    strings.engTwoPoint1,
                    strings.engTwoPoint2,
                    strings.engTwoPoint3,
                ]}/>
                <ResumeCard title={strings.engOneTitle} listItems={[
                    strings.engOnePoint1,
                    strings.engOnePoint2,
                    strings.engOnePoint3,
                    strings.engOnePoint4,
                ]}/>
                <ResumeCard title={strings.jrEngineerTitle} listItems={[
                    strings.jrEngineerPoint1,
                    strings.jrEngineerPoint2,
                    strings.jrEngineerPoint3,
                    strings.jrEngineerPoint4,
                    strings.jrEngineerPoint5
                ]}/>
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://www.linkedin.com/in/austinjwhite96/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <text>|</text>
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
