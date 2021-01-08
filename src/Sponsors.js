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
        transform: translateY(-20px);
    }
    50% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(-20px);
    }
`;

const SponsorsWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: block;
  box-sizing: content-box;
  .inner-wrapper {
    padding: 20px 0;
    display: inline-block;
    animation: ${Loop} 100s linear infinite;
    white-space: nowrap;
    box-sizing: content-box;
  }
`;
const SponsorLogo = styled.div`
  height: 100px;
  display: inline-block;
  valign: middle;
  vertical-align: top;
  margin-left: 40px;
  width: 240px;
  animation: ${Scale} 10s ease-in-out infinite;
  animation-delay: ${(props) => `${props.scroll}s`};
  .center-image {
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 240px;
    height: auto;
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
            <div className="center-image">
              <img src={sponsor.logo} alt="logo" />
            </div>
          </SponsorLogo>
        ))}
        {sponsors.map((sponsor, key) => (
          <SponsorLogo
            key={key}
            className="sponsor-logo"
            scroll={sponsors.length - 1 - key}
          >
            <div className="center-image">
              <img src={sponsor.logo} alt="logo" />
            </div>
          </SponsorLogo>
        ))}
      </div>
    </SponsorsWrapper>
  );
}

export default Sponsors;
