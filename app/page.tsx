import Card from '@/components/Card'
import styles from '@/app/page.module.css'
import { IQuestion } from '@/interfaces/interfaces'
import Modal from '@/components/Modal'
import getData from '@/utils/getData'

async function Page(): Promise<JSX.Element> {

    const listQuestions: IQuestion[] = await getData()

    return (

        <>
            <h1 className={styles.header}>Что будет выведено в консоль?</h1>
            <ul className={styles.list}>
                {listQuestions.map((question) => (
                    <Card key={question.id} question={question} />
                ))}
            </ul>
            <Modal />
        </>
    )
}

export default Page