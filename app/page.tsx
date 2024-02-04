import Card from '@/components/Card'
import styles from '@/app/page.module.css'
import { IQuestion } from '@/interfaces/interfaces'
import Modal from '@/components/Modal'

async function getData(): Promise<IQuestion[]> {

    // Fetch data on *.json or *.ts file
    const res: Response = await fetch(`${process.env.API_HOST}/v2/questions/`)

    if (!res.ok) throw new Error('Failed to fetch data')

    return res.json()
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