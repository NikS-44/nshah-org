import Link from "next/link";
import React from "react";
import styled from "styled-components";
import SiteLogo from "./icons/SiteLogo";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background: #2d2d2d;
  color: lightgrey;
`

const StyledNavItem = styled.li`
  align-self: center;
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  min-width: min(50vw, 768px);
  max-width: 768px;
  list-style-type: none; /* Remove bullets */
`

const VerticalDivider = styled.div`
  color: rgba(255, 255, 255, 0.3);
  align-self: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  text-align: center;
`;

const TextContainer = styled.span<{
    content: string;
}>`
  text-align: center;
  padding: 0 1em;

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
  // TODO: https://stackoverflow.com/questions/11701311/logo-image-and-h1-heading-on-the-same-line
`


const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <StyledUl>
                    <StyledNavItem>
                        <StyledLink href="/" aria-label="Logo - Homepage Link">
                            <StyledLogoContainer>
                                <SiteLogo/>
                            </StyledLogoContainer>
                        </StyledLink>
                    </StyledNavItem>
                    <StyledNavItem>
                        <StyledLink href="/">
                            <TextContainer content={"Home"}>Home</TextContainer>
                        </StyledLink>
                    </StyledNavItem>
                    <VerticalDivider>|</VerticalDivider>
                    <StyledNavItem>
                        <StyledLink href="/resume">
                            <TextContainer content={"Resume"}>Resume</TextContainer>
                        </StyledLink>
                    </StyledNavItem>
                    <VerticalDivider>|</VerticalDivider>
                    <StyledNavItem>
                        <StyledLink href="/projects">
                            <TextContainer content={"Projects"}>Projects</TextContainer>
                        </StyledLink>
                    </StyledNavItem>
                </StyledUl>
            </nav>
        </StyledHeader>
    )

}

export default Header;
