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

interface IUseModal {
    modalVisible: boolean,
    dataModal: IDataModal,
    showModal: () => void,
    hideModal: () => void,
    setDataModal: (dataModal: IDataModal) => void,
}

interface IUseCounter {
    correct: number,
    inCorrect: number,
    setCorrect: () => void,
    setInCorrect: () => void,
}

export type { IQuestion, IDataModal, IUseModal, IUseCounter }
