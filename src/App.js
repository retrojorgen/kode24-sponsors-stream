import React from "react";

import styled from "styled-components";
import Sponsors from "./Sponsors";

import blackPixelPattern from "./images/black-pixel-pattern.png";
import whitePixelPattern from "./images/white-pixel-pattern.png";
const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;
  display: flex;
  overflow: hidden;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const TeaserWrapper = styled.div`
  width: 100%;
  height: calc(100% - 160px);
  background-color: blue;
  position: relative;
`;
const SponsorsWrapper = styled.div`
  height: 160px;
  width: 100%;
  background-color: #141414;
  position: relative;
`;

function App() {
  return (
    <Wrapper>
      <MainWrapper>
        <TeaserWrapper></TeaserWrapper>
        <SponsorsWrapper>
          <Sponsors />
        </SponsorsWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export default App;
