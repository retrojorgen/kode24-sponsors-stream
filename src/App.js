import React from "react";

import styled from "styled-components";
import Sponsors from "./Sponsors";

const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;
  display: flex;
  overflow: hidden;
`;

const SponsorsWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  position: relative;
`;

function App() {
  return (
    <Wrapper>
      <SponsorsWrapper>
        <Sponsors />
      </SponsorsWrapper>
    </Wrapper>
  );
}

export default App;
