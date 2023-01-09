import Link from "next/link";
import React from "react";
import styled from "styled-components";
import SiteLogo from "./icons/SiteLogo";

const StyledHeader = styled.header`
  display: flex;
  background: #2d2d2d;
  color: lightgrey;
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: min(60vw, 600px);
`

const StyledNavItem = styled.div`
  align-self: center;
`

const VerticalDivider = styled.div`
  color: rgba(255, 255, 255, 0.3);
  align-self: center;
`;

const StyledLink = styled(Link)`
  padding: 1px 1em;
  text-decoration: none;
  color: inherit;
  display: flex;
  text-align: center;
`;

const TextContainer = styled.span<{
    content: string;
}>`
  text-align: center;

  ::before {
    display: block;
    content: "${(props) => props.content}";
    font-weight: 900;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  :hover {
    font-weight: 900;
  }
`

const StyledLogoContainer = styled.div`
  margin-left: 10px;
  margin-right: 50px;
`


const Header = () => {
    return (
        <StyledHeader>
            <StyledLogoContainer>
                <SiteLogo/>
            </StyledLogoContainer>
            <StyledNav>
                <StyledNavItem>
                    <StyledLink href="/">
                        <TextContainer content={"Home"}>Home</TextContainer>
                    </StyledLink>
                </StyledNavItem>
                <VerticalDivider>&nbsp; | &nbsp;</VerticalDivider>
                <StyledNavItem>
                    <StyledLink href="/resume">
                        <TextContainer content={"Resume"}>Resume</TextContainer>
                    </StyledLink>
                </StyledNavItem>
                <VerticalDivider>&nbsp; | &nbsp;</VerticalDivider>
                <StyledNavItem>
                    <StyledLink href="/projects">
                        <TextContainer content={"Projects"}>Projects</TextContainer>
                    </StyledLink>
                </StyledNavItem>
            </StyledNav>
        </StyledHeader>
    )

}

export default Header;
