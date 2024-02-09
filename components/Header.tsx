import styles from '@/components/Header.module.css'
import Counter from '@/components/Counter'
import Refresh from '@/components/Refresh'

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
                <Refresh />
                <Counter />
            </div>
        </header>
    )
}

export default Header
