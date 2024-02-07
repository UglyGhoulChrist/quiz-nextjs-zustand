import styles from '@/components/Card.module.css'
import PreCode from '@/components/PreCode'
import OptionsAnswer from '@/components/OptionsAnswer'
import { IQuestion } from '@/interfaces/interfaces'

type Props = {
    question: IQuestion,
}

async function Card({ question }: Props) {

    return (

        <li className={styles.card}>
            <PreCode question={question} />
            <OptionsAnswer question={question} />
        </li>
    )
}

export default Card
