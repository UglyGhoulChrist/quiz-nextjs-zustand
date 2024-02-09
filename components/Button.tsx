import styles from '@/components/Button.module.css'

type Props = {
    text: string,
    onClick?: () => void,
}

function Button({ text, onClick }: Props): JSX.Element {

    return (

        <button onClick={onClick} className={styles.button}>
            {text}
        </button>
    )
}

export default Button
