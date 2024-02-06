'use client'

import styles from '@/components/Card.module.css'
import PreCode from '@/components/PreCode'
import OptionsAnswer from '@/components/OptionsAnswer'

import javascript from '@/highlight/javascript'
hljs.registerLanguage('javascript', javascript)
import hljs from '@/highlight/core'
import { useEffect } from 'react'
import { IQuestion } from '@/interfaces/interfaces'

type Props = {
    question: IQuestion,
}

function Card({ question }: Props) {

    useEffect(() => {
        hljs.highlightAll()
    }, [])

    return (

        <li className={styles.card}>
            <PreCode question={question} />
            <OptionsAnswer question={question} />
        </li>
    )
}

export default Card
