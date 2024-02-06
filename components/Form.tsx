'use client'

import styles from '@/components/Form.module.css'
import Button from '@/components/Button'
import { useCounter, useModal } from '@/stores/stores'
import { IQuestion } from '@/interfaces/interfaces'
import { useState } from 'react'

type Props = {
    question: IQuestion,
}

function Form({ question }: Props): JSX.Element {

    // Деструктуризация Props-question
    const { id, listAnswers, indexRightAnswer, explanation } = question
    const rightAnswer: string = listAnswers[indexRightAnswer]

    // Zustand состояние. Видимость модального окна
    const showModal = useModal((state) => state.showModal)
    // Zustand состояние. Данные в модальном окне
    const setDataModal = useModal((state) => state.setDataModal)

    // Zustand состояние. Изменение счётчика правильных / неправильных ответов
    const setCorrect = useCounter((state) => state.setCorrect)
    const setInCorrect = useCounter((state) => state.setInCorrect)

    // Состояние индекса выбранного ответа
    const [idxUserAnswer, setIdxUserAnswer] = useState<null | 0 | 1 | 2 | 3>(null)

    // Функция обработки выбора ответа
    function handleInput(idx: number) {

        if (idx === null || idx === 0 || idx === 1 || idx === 2 || idx === 3) {
            setIdxUserAnswer(idx)
        }
    }

    // Функция обработки формы
    function handleSubmit(event: { preventDefault: () => void }) {
        // Отменяю действие формы по умолчанию
        event.preventDefault()
        // Изменяю счётчик правильных / неправильных ответов
        if (idxUserAnswer === indexRightAnswer) {
            setCorrect()
        } else { setInCorrect() }

        // Zustand состояние. Заполняю данными форму.
        setDataModal({ indexRightAnswer, rightAnswer, explanation, idxUserAnswer })
        // Zustand состояние. Показываю форму.
        showModal()
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                {listAnswers.map((answer, idx) => (
                    <label key={idx} className={styles.answer}>
                        <input onClick={() => handleInput(idx)} type='radio' id={`input_${id}_${idx}`} name={`input_${id}`} />
                        {answer}</label>
                ))}
                <Button text='Ответить' />
            </form>
        </>
    )
}

export default Form