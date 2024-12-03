import styles from './Header.module.scss'
import { Nav } from '../Nav/Nav';
export const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Header</h1>
            <Nav />
        </header>
    );
};