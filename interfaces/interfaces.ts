interface IQuestion {
    id: number,
    textQuestion: string,
    listAnswers: [string, string, string, string,],
    indexRightAnswer: 0 | 1 | 2 | 3,
    explanation: string,
}

interface IDataModal {
    indexRightAnswer?: number,
    rightAnswer?: string,
    explanation?: string,
    idxUserAnswer?: null | 0 | 1 | 2 | 3,
}

export type { IQuestion, IDataModal }
