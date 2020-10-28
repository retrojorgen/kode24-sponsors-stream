import React from "react";
import styled, { keyframes } from "styled-components";
import logo1 from "./images/sponsor/boitano-clean-3.png";
import logo2 from "./images/sponsor/bouvet-clean.png";
import logo3 from "./images/sponsor/capra-clean.png";
import logo4 from "./images/sponsor/deploi-clean.png";
import logo5 from "./images/sponsor/enonic-clean.png";
import logo6 from "./images/sponsor/enso-clean.png";
import logo7 from "./images/sponsor/everyday-clean.png";
import logo8 from "./images/sponsor/fiken-clean.png";
import logo9 from "./images/sponsor/kodebyraaet-clean-2.png";
import logo10 from "./images/sponsor/kodemaker-clean.png";
import logo11 from "./images/sponsor/kolonial-clean.png";
import logo12 from "./images/sponsor/netlight-clean.png";
import logo13 from "./images/sponsor/search-planet.png";
import logo14 from "./images/sponsor/shortcut_logo_white.png";
import logo15 from "./images/sponsor/stacc-clean.png";
import logo16 from "./images/sponsor/sweat-clean.png";
import logo17 from "./images/sponsor/tripletex-clean.png";
import logo18 from "./images/sponsor/ways-clean.png";
import logo19 from "./images/sponsor/epinova-clean.png";
import logo20 from "./images/sponsor/facilitate-clean.png";

const Loop = keyframes`
    0% {
        transform: translateX(0)
    }
    100% {
        transform: translateX(5600px)
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

console.log("hest");

const SponsorsWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: block;
  .inner-wrapper {
    padding: 20px 0;
    display: flex;
    animation: ${Loop} 120s linear infinite;
    margin-left: -5600px;
    flex-wrap: nowrap;
    .sponsor-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 40px;
      width: 240px;
      img {
        width: 240px;
        height: auto;
      }
      &:nth-child(1) {
        animation: ${Scale} 4s 0.1s ease-in-out infinite;
      }
      &:nth-child(2) {
        animation: ${Scale} 4s 0.2s ease-in-out infinite;
      }
      &:nth-child(3) {
        animation: ${Scale} 4s 0.3s ease-in-out infinite;
      }
      &:nth-child(4) {
        animation: ${Scale} 4s 0.4s ease-in-out infinite;
      }
      &:nth-child(5) {
        animation: ${Scale} 4s 0.5s ease-in-out infinite;
      }
      &:nth-child(6) {
        animation: ${Scale} 4s 0.6s ease-in-out infinite;
      }
      &:nth-child(7) {
        animation: ${Scale} 4s 0.7s ease-in-out infinite;
      }
      &:nth-child(8) {
        animation: ${Scale} 4s 0.8s ease-in-out infinite;
      }
      &:nth-child(9) {
        animation: ${Scale} 4s 0.9s ease-in-out infinite;
      }
      &:nth-child(10) {
        animation: ${Scale} 4s 1s ease-in-out infinite;
      }
      &:nth-child(11) {
        animation: ${Scale} 4s 1.1s ease-in-out infinite;
      }
      &:nth-child(12) {
        animation: ${Scale} 4s 1.2s ease-in-out infinite;
      }
      &:nth-child(13) {
        animation: ${Scale} 4s 1.3s ease-in-out infinite;
      }
      &:nth-child(14) {
        animation: ${Scale} 4s 1.4s ease-in-out infinite;
      }
      &:nth-child(15) {
        animation: ${Scale} 4s 1.5s ease-in-out infinite;
      }
      &:nth-child(16) {
        animation: ${Scale} 4s 1.6s ease-in-out infinite;
      }
      &:nth-child(17) {
        animation: ${Scale} 4s 1.7s ease-in-out infinite;
      }
      &:nth-child(18) {
        animation: ${Scale} 4s 1.8s ease-in-out infinite;
      }
      &:nth-child(19) {
        animation: ${Scale} 4s 1.9s ease-in-out infinite;
      }
      &:nth-child(20) {
        animation: ${Scale} 4s 2s ease-in-out infinite;
      }
      &:nth-child(21) {
        animation: ${Scale} 4s 2s ease-in-out infinite;
      }
      &:nth-child(22) {
        animation: ${Scale} 4s 1.9s ease-in-out infinite;
      }
      &:nth-child(23) {
        animation: ${Scale} 4s 1.8s ease-in-out infinite;
      }
      &:nth-child(24) {
        animation: ${Scale} 4s 1.7s ease-in-out infinite;
      }
      &:nth-child(25) {
        animation: ${Scale} 4s 1.6s ease-in-out infinite;
      }
      &:nth-child(26) {
        animation: ${Scale} 4s 1.5s ease-in-out infinite;
      }
      &:nth-child(27) {
        animation: ${Scale} 4s 1.4s ease-in-out infinite;
      }
      &:nth-child(28) {
        animation: ${Scale} 4s 1.3s ease-in-out infinite;
      }
      &:nth-child(29) {
        animation: ${Scale} 4s 1.2s ease-in-out infinite;
      }
      &:nth-child(30) {
        animation: ${Scale} 4s 1.1s ease-in-out infinite;
      }
      &:nth-child(31) {
        animation: ${Scale} 4s 1s ease-in-out infinite;
      }
      &:nth-child(32) {
        animation: ${Scale} 4s 0.9s ease-in-out infinite;
      }
      &:nth-child(33) {
        animation: ${Scale} 4s 0.8s ease-in-out infinite;
      }
      &:nth-child(34) {
        animation: ${Scale} 4s 0.7s ease-in-out infinite;
      }
      &:nth-child(35) {
        animation: ${Scale} 4s 0.6s ease-in-out infinite;
      }
      &:nth-child(36) {
        animation: ${Scale} 4s 0.5s ease-in-out infinite;
      }
      &:nth-child(37) {
        animation: ${Scale} 4s 0.4s ease-in-out infinite;
      }
      &:nth-child(38) {
        animation: ${Scale} 4s 0.3s ease-in-out infinite;
      }
      &:nth-child(39) {
        animation: ${Scale} 4s 0.2s ease-in-out infinite;
      }
      &:nth-child(40) {
        animation: ${Scale} 4s 0.1s ease-in-out infinite;
      }
      &:last-item {
        padding-right: 40px;
      }
    }
  }
`;
function Sponsors() {
  return (
    <SponsorsWrapper>
      <div className="inner-wrapper">
        <div className="sponsor-logo">
          <img src={logo1} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo2} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo3} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo4} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo5} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo6} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo7} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo8} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo9} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo10} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo11} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo12} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo13} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo14} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo15} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo16} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo17} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo18} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo19} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo20} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo1} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo2} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo3} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo4} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo5} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo6} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo7} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo8} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo9} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo10} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo11} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo12} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo13} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo14} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo15} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo16} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo17} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo18} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo19} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo20} alt="logo" />
        </div>
      </div>
    </SponsorsWrapper>
  );
}

export default Sponsors;
