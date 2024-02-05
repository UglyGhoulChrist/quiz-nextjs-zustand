import styles from '@/components/Copy.module.scss'

type Props = {
    textQuestion: string,
}

function Copy({ textQuestion }: Props): JSX.Element {

    return (

        <button className={styles.button} onClick={() => { navigator.clipboard.writeText(textQuestion) }} type="button" title="Copy code">
            copy
        </button>)
}

export default Copy
