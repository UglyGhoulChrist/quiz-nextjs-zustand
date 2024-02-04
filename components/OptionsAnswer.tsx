import styles from '@/components/OptionsAnswer.module.css'
import Button from '@/components/Button'
import { useModal } from '@/stores/stores'
import { IQuestion } from '@/interfaces/interfaces'

type Props = {
    question: IQuestion,
}

function OptionsAnswer({ question }: Props) {

    const showModal = useModal((state) => state.showModal)
    const setDataModal = useModal((state) => state.setDataModal)
    const { listAnswers, indexRightAnswer, explanation } = question
    const rightAnswer = listAnswers[indexRightAnswer]

    function handleButton() {
        showModal()
        setDataModal({ rightAnswer, explanation })
    }

    return (
        <div className={styles.answers}>
            <h3 className={styles.title}>Варианты ответов:</h3>
            {listAnswers?.map((answer, idx) => (
                <span className={styles.answer} key={idx}>{answer}</span>
            ))}
            <div className={styles.footer}>
                <Button onClick={handleButton} text='Ответ' />
            </div>
        </div>
    )
}

export default OptionsAnswer