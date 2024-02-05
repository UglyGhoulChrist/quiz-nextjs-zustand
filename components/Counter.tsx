'use client'

import styles from '@/components/Counter.module.css'
import { useCounter } from '@/stores/stores'

function Counter() {

    const correct = useCounter(state => state.correct)
    const inCorrect = useCounter(state => state.correct)

    return (

        <h2 className={styles.counter}>Counter:&nbsp;
            <span className={styles.correct}>{correct}</span >
            &nbsp;/&nbsp;
            <span className={styles.inCorrect}>{inCorrect}</span>
        </h2>
    )
}

export default Counter