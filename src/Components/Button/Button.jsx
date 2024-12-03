import { ButtonStyled } from "./Button.styled"

export const Button = ({ clickEvent, bSize, bColor, textValue, }) => {
    return (
        <button onClick={() =>clickEvent()} style={{width: bSize, color: bColor}}>{textValue}</button>
    )
}