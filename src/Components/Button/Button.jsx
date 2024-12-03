import { ButtonStyled } from "./Button.styled"

export const Button = (props) => {
    return (
        <button onClick={ () => props.action() }>{props.textValue}</button>
    )
}