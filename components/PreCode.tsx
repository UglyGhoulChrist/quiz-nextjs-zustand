'use client'

import styles from '@/components/PreCode.module.scss'
import { IQuestion } from '@/interfaces/interfaces'
import Copy from './Copy'

import javascript from '@/highlight/javascript'
hljs.registerLanguage('javascript', javascript)
import hljs from '@/highlight/core'
import { useEffect } from 'react'

type Props = {
    question: IQuestion,
}

function PreCode({ question }: Props): JSX.Element {

    const { id, textQuestion } = question

    useEffect(() => {
        hljs.highlightAll()
    }, [])


    return (

        <pre className={styles.question}>
            <div className={styles.header}>
                <span className={styles.id}>id:{id}</span>
                <h3 className={styles.title}>JavaScript:</h3>
                <Copy textQuestion={textQuestion} />
            </div>
            <code className={`${styles.code} language-javascript`}>{textQuestion}</code>
        </pre>
    )
}

export default PreCode
