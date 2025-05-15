import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <text>my resume</text>
                <ul>
                    <li>software engineer 2</li>
                    <li>software engineer 1</li>
                    <li>jr software engineer</li>
                </ul>

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
