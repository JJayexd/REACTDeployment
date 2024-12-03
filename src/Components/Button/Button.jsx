import { ButtonStyled } from "./Button.styled"

export const Button = ({ clickEvent, bSize, bTheme, bgTheme, textValue, }) => {
    return (
        <button onClick={() =>clickEvent()} style={{width: bSize, color: bTheme, backgroundColor: bgTheme}}>{textValue}</button>
    )
}