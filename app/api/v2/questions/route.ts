import { NextRequest, NextResponse } from 'next/server'
import listQuestions from '@/app/api/v2/db'
import { IQuestion } from '@/interfaces/interfaces'

// Получение всех вопросов

async function GET(req: NextRequest): Promise<NextResponse<IQuestion[]>> {

    return NextResponse.json(listQuestions)
}

export { GET } 