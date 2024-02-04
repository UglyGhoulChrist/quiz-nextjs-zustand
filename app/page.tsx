import Card from '@/components/Card'
import styles from '@/app/page.module.css'
import { IQuestion } from '@/interfaces/interfaces'
import Modal from '@/components/Modal'

async function getData(): Promise<IQuestion[]> {

    try {
        // Fetch data on *.json or *.ts file
        const res: Response = await fetch(`${process.env.API_HOST}/v2/questions/`)

        if (!res.ok) throw new Error('Failed to fetch data')

        return res.json()

    } catch (error) {

        return [
            {
                id: 0,
                textQuestion: 'textQuestion',
                listAnswers: [
                    'Answer 0',
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                ],
                indexRightAnswer: 0,
                explanation: 'explanation',
            }]
    }
}

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