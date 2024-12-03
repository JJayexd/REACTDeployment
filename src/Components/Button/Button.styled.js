import styled from 'styled-components';

export const ButtonStyled = styled.button`
    color: ${props => props.bColor};
    background-color: ${props => props.bgColor};
    width: ${props => props.bSize};
`;