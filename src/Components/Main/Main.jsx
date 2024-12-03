import styles from './Main.module.scss'
import { Button } from '../Button/Button'
export const Main = () => {
    return (
        <main className={styles.main}>
            <h2>Main</h2>
            <Button textValue="Køb"></Button>
            <Button textValue="Anuller"></Button>
        </main>
    );
};