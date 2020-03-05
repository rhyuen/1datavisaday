import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledNav: React.FunctionComponent<{}> = styled.nav`
  display: grid;
  grid-template-columns:
    minmax(20px, 1fr)
    repeat(8, minmax(auto, 100px))
    minmax(20px, 1fr);
  background-color: rgb(72, 66, 183);
  height: 15vh;

  @media (min-width: 640px) and (max-width: 1023px) {
    grid-template-columns:
      minmax(20px, 1fr)
      repeat(10, minmax(auto, 100px))
      minmax(20px, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(20px, 1fr)
      repeat(12, minmax(auto, 100px))
      minmax(20px, 1fr);
  }
`;

const LeftSection = styled.section`
  height: 100%;
  grid-column: 2;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;


const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  margin-right: 40px;
  border-bottom: 2px solid transparent;
  transition: all 0.25s ease-in 0s;

  &:hover {
    border-bottom-color: white;
  }
`;

const Nav: React.FunctionComponent<{}> = () => {
  return (
    <StyledNav>
      <LeftSection>
        <StyledLink to="/">1DVAD</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </LeftSection>
    </StyledNav>
  );
};

export default Nav;
