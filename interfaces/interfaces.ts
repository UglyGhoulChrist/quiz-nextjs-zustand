interface IQuestion {
    id: number,
    textQuestion: string,
    listAnswers: [string, string, string, string,],
    indexRightAnswer: 0 | 1 | 2 | 3,
    explanation: string,
}

interface IDataModal {
    rightAnswer?: string,
    explanation?: string,
}

export type { IQuestion, IDataModal }
