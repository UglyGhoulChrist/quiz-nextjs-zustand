import styles from '@/components/Header.module.css'
import Counter from './Counter'

function Header(): JSX.Element {

    return (

        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        className={styles.link}
                    >
                        Quiz
                    </a>
                </nav>
                <Counter />
            </div>
        </header>
    )
}

export default Header
