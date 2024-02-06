import styles from '@/components/OptionsAnswer.module.css'
import { IQuestion } from '@/interfaces/interfaces'
import Form from '@/components/Form'

type Props = {
    question: IQuestion,
}

function OptionsAnswer({ question }: Props): JSX.Element {

    return (

        <div className={styles.answers}>
            <h3 className={styles.title}>Варианты ответов:</h3>
            <Form question={question} />
        </div>
    )
}

export default OptionsAnswer