import { ButtonStyled } from "./Button.styled"

export const Button = ({ clickEvent, btnSize, btnTheme, bgTheme, textValue, }) => {

    const getButtonSize = (btnSize) => {
        switch (btnSize) {
            default:
            case "Small":
                return "10"
            case "Medium":
                return "12"
            case "Large":
                return "14"
                
        }
    }

    return (
        <ButtonStyled 
        onClick={() => clickEvent()} size={getButtonSize(btnSize)}>{textValue}
        </ButtonStyled>
    )
}