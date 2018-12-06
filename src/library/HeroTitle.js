import styled from "styled-components";

import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT,
} from "./breakpoints"


// Center vertical and horizontal
// https://stackoverflow.com/questions/36817249/element-will-not-stay-centered-especially-when-re-sizing-screen
const HeroTitle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  font-size: 21px;

  color: white;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: 300;
  font-style: normal;

  @media (min-width: ${SMALL_BREAKPOINT}) {

    font-size: 40px;
  }
  
`

export { HeroTitle }