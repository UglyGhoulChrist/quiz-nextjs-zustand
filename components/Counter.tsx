'use client'

import styles from '@/components/Counter.module.css'
import { useCounter } from '@/stores/stores'

function Counter(): JSX.Element {

    const correct: number = useCounter<number>(state => state.correct)
    const inCorrect: number = useCounter<number>(state => state.inCorrect)

    return (

        <h2 className={styles.counter}>Counter:&nbsp;
            <span className={styles.correct}>{correct}</span >
            &nbsp;/&nbsp;
            <span className={styles.inCorrect}>{inCorrect}</span>
        </h2>
    )
}

export default Counter