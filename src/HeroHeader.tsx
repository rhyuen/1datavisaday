import * as React from "react";
import styled from "styled-components";

const HeroHeader: React.FunctionComponent<{}> = styled.section`
  grid-column: 1 / -1;
  color: white;
  display: grid;
  background-color: rgb(72, 66, 183);
  margin-bottom: 10px;
  height: 75vh;
  font-size: 2rem;

  font-weight: bold;
  justify-content: center;
  text-align: center;
  word-wrap: break-word;
  align-items: center;

  @media (min-width: 640px) and (max-width: 1023px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const ExportedHeroHeader: React.FunctionComponent<{}> = () => {
  return (
    <HeroHeader>
      1 DataVis A Day
    </HeroHeader>
  );
};

export default ExportedHeroHeader;
