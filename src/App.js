import React from "react";

import styled from "styled-components";
import Sponsors from "./Sponsors";

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 1920px;
  height: 1080px;
  display: flex;
`;

const SponsorsWrapper = styled.div`
  display: flex;
  align-items: top;
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
