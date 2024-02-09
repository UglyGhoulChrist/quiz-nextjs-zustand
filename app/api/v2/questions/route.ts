import { NextRequest, NextResponse } from 'next/server'
import listQuestions from '@/app/api/v2/db'
import { IQuestion } from '@/interfaces/interfaces'

// При каждом GET-запросе заставляет сервер отдавать новые данные

const dynamic = 'force-dynamic'

// Получение 20 случайных вопросов

async function GET(req: NextRequest): Promise<NextResponse<IQuestion[]>> {

    // Получаю длину исходного массива
    const lengthListQuestions: number = listQuestions.length

    // Создаю Сет
    const setPositions: Set<number> = new Set()

    // Заполняю Сет случайными неповторяющимися индексами
    while (setPositions.size < 20) {
        const randomPosition: number = Math.floor(Math.random() * lengthListQuestions)
        setPositions.add(randomPosition)
    }
    // Создаю новый массив
    const random20ListQuestions: IQuestion[] = []

    // Заполняю новый массив объектами из исходного массива по индексу
    setPositions.forEach(position => {
        random20ListQuestions.push(listQuestions[position])
    })

    // return NextResponse.json(listQuestions)
    return NextResponse.json(random20ListQuestions)
}

export { GET, dynamic }
