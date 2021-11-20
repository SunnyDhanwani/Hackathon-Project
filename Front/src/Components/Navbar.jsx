import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavItem } from "./NavItem";

const StyledNavbar = styled.div`
    display: flex;
    /* background-color: transparent; */
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    position: sticky;

    .left-nav img {
        height: 30px;
    }
    .right-nav {
        display: flex;
        /* background-color: turquoise; */
    }
`;

const Navbar = () => {
    return (
        <>
            <StyledNavbar>
                <div className="left-nav">
                    <img src="https://direct.delhivery.com/assets/images/logo.png" alt="logo" />
                </div>
                <div className="right-nav">
                    <NavItem
                        title="About"
                        link="#"
                    />
                    <Link to="/track">
                    <NavItem
                        title="Track"
                        link="#"
                    />
                    </Link>
                    <NavItem
                        title="Employee Login"
                        link="#"
                    />
                </div>
            </StyledNavbar>
        </>
    );
}

export { Navbar };