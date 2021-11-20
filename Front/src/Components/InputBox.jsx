import { React } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    display: flex;
    flex-grow: 1;
    background-color: whitesmoke;
    border: lightgray;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid gray;
    font-size: 18px;
    box-sizing: border-box;

    &:focus, &:active {
        background-color: white;
        border: none;
        outline: 2px solid #fd4e6b;
    }
`;

const InputBox = ({name, placeholder, value, type, handleInput, maxLength}) => {
    return (
        <>
            <StyledInput
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
                maxLength={maxLength}
                onChange={handleInput}
            />
        </>
    );
}

export { InputBox };