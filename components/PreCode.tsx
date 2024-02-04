import styles from '@/components/PreCode.module.css'
import { IQuestion } from '@/interfaces/interfaces'

type Props = {
    question: IQuestion,
}

function PreCode({ question }: Props) {

    return (

        <pre className={styles.question}>
            <h3 className={styles.title}>JavaScript:</h3>
            <code className={`${styles.code} language-javascript`}>{question.textQuestion}</code>
        </pre>
    )
}

export default PreCode
