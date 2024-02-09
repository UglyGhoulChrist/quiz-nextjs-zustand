import { IQuestion } from "@/interfaces/interfaces"

async function getData(): Promise<IQuestion[]> {

    try {
        // Fetch data on *.json or *.ts file
        const res: Response = await fetch(`${process.env.API_HOST}/v2/questions/`,
            {
                // После запроса к серверу обновляет данные по вопросам
                next: { revalidate: 0 },
            })

        if (!res.ok) throw new Error('Failed to fetch data')

        return res.json()

    } catch (error) {

        // При попытке деплоя приложения, 
        // главная страница (если она статика) делает GET-запрос на сервер, 
        // а т.к. сервер ещё не запущен,
        // получаем ошибку деплоя
        // можно return []
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

export default getData