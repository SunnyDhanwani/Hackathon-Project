import React from "react";
import styled from "styled-components";

const StyledNavItem = styled.button`
    display: flex;
    font-weight: bold;
    color: white;
    border: none;
    background-color: transparent;
    font-size: 16px;
    cursor: pointer;
    padding: 3px 15px;
    border-radius: 10px;
    margin-left: 10px;

    &:hover, &:focus {
        color: #fd4e6b;
    }
`;

const NavItem = ({title, link}) => {
    return (
        <>
            <StyledNavItem>
                {title}
            </StyledNavItem>
        </>
    );
}

export { NavItem };