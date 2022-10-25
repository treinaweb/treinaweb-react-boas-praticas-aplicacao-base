import styles from './style.module.css'

export default function Header() {

    return (
        <header className={styles.header}>
            <img className={styles.image} src="/myteacher.png" alt="my teacher" />
        </header>
    )
}