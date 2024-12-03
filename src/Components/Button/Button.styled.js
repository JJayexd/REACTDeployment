import styled from 'styled-components';

export const ButtonStyled = styled.button`
    color: ${props => props.bTheme};
    background-color: ${props => props.bgTheme};
    font-size: ${props => props.size}px;
`;