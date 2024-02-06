'use client'

import Button from '@/components/Button'
import styles from '@/components/Modal.module.css'
import { useModal } from '@/stores/stores'

function Modal(): JSX.Element {

    const visibleModal: boolean = useModal((state) => state.modalVisible)
    const { indexRightAnswer, rightAnswer, explanation, idxUserAnswer } = useModal((state) => state.dataModal)
    const hideModal = useModal((state) => state.hideModal)

    return (

        <div className={`${styles.modal} ${visibleModal && styles.visible}`}>
            <div className={styles.content}>
                <h3 className={`${styles.title} ${indexRightAnswer === idxUserAnswer ? styles.right : styles.notRight}`}>{rightAnswer}</h3>
                <div className={styles.explanation}>
                    {explanation}
                </div>
                <div className={styles.footer}>
                    <Button onClick={hideModal} text='Закрыть' />
                </div>
            </div>
        </div>
    )
}

export default Modal
