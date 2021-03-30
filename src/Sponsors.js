import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import getSponsors from "./api/sponsors";

const Loop = keyframes`
    0% {
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
`;

const Scale = keyframes`
    0% {
        transform: translateY(-10px);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(-10px);
    }
`;

const SponsorsWrapper = styled.div`
  width: 100%;
  display: block;
  box-sizing: content-box;
  .inner-wrapper {
    display: inline-block;
    animation: ${Loop} 200s linear infinite;
    white-space: nowrap;
    box-sizing: content-box;
  }
`;
const SponsorLogo = styled.div`
  display: inline-block;
  valign: middle;
  vertical-align: top;
  margin-left: 40px;
  width: auto;
  animation: ${Scale} 10s ease-in-out infinite;
  animation-delay: ${(props) => `${props.scroll}s`};
  .center-image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    height: 40px;
  }
`;
function Sponsors() {
  let [sponsors, setSponsors] = useState([]);
  useEffect(() => {
    async function getEventData() {
      let newSponsors = await getSponsors();
      setSponsors(newSponsors);
      console.log("hello", newSponsors);
    }
    getEventData();
  }, []);
  return (
    <SponsorsWrapper>
      <div className="inner-wrapper">
        {sponsors.map((sponsor, key) => (
          <SponsorLogo key={key} className="sponsor-logo" scroll={key}>
            <img src={sponsor} alt="logo" />
          </SponsorLogo>
        ))}
        {sponsors.map((sponsor, key) => (
          <SponsorLogo
            key={key}
            className="sponsor-logo"
            scroll={sponsors.length - 1 - key}
          >
            <img src={sponsor} alt="logo" />
          </SponsorLogo>
        ))}
      </div>
    </SponsorsWrapper>
  );
}

export default Sponsors;
