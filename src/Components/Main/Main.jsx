import { MainStyled } from './Main.styled';
import { Button } from '../Button/Button'
export const Main = () => {

    const eventClick = () => {
        alert('Klik Event.')
      }

    return (
        <MainStyled $bgcolor="black">
            <h2>Main</h2>
            <Button clickEvent={eventClick} textValue="Klik" btnSize='Snall' btnTheme={"black"} bgTheme={"white"}></Button>
        </MainStyled>
    );
};