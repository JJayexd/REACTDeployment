import { HeaderStyled } from './Header.styled';
import { Nav } from '../Nav/Nav';
export const Header = () => {
    return (
        <HeaderStyled $bgcolor="black">
            <h1>Header</h1>
            <Nav />
        </HeaderStyled>
    );
};