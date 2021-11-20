import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledButton = styled.button`
    display: flex;
    padding: 10px 15px;
    background-color: #a3a3a7;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 3px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    text-decoration: none;

    &:focus, &:hover {
        background-color: #707070;
    }
`;

const Button = ({ title }) => {
    return (
        <StyledButton>
            {title}
        </StyledButton>
    );
}

export { Button };