import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  background: #2d2d2d;
  color: lightgrey;
  padding: 10px 0;
`

const StyledLink = styled.a`
  border: 1px solid rgba(255, 255, 224, 0.4);
  border-radius: 4px;
  padding: 1px 1em;
  text-decoration: none;
  color: inherit;

  :hover {
    border: 1px solid rgba(255, 255, 255, 0.7);;
  }
`

const StyledIconMarginText = styled.span`
  margin-right: .5em;
`

const MadeByDiv = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const VerticalDivider = styled.div`
  color: rgba(255, 255, 255, 0.3);
`;

const Footer = () => {
    return(
    <StyledFooter>
        <MadeByDiv>
            <div>Hosted by Vercel</div>
            <VerticalDivider>&nbsp; | &nbsp;</VerticalDivider>
            <div>
                <StyledLink href={"https://github.com/NikS-44/nshah-org"}>
                    <StyledIconMarginText>Source Code</StyledIconMarginText>
                    <GitHubIcon/>
                </StyledLink>
            </div>
            <VerticalDivider>&nbsp; | &nbsp;</VerticalDivider>
            <div>
                <StyledLink href={"https://github.com/NikS-44/"}>
                    <StyledIconMarginText>GitHub</StyledIconMarginText>
                    <GitHubIcon/>
                </StyledLink>
            </div>
            <VerticalDivider>&nbsp; | &nbsp;</VerticalDivider>
            <div>
                <StyledLink href={"https://www.linkedin.com/in/nik-shah-657ba616/"}>
                    <StyledIconMarginText>LinkedIn</StyledIconMarginText>
                    <LinkedInIcon/>
                </StyledLink>
            </div>
            <VerticalDivider>&nbsp; | &nbsp;</VerticalDivider>
            <div>
                © {new Date().getFullYear()}
            </div>
        </MadeByDiv>
    </StyledFooter>
    )
}

export default Footer;
