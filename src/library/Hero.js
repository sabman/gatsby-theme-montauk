import styled from "styled-components";

import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT,
} from "./breakpoints"

const Hero = styled.div`
  position: relative;
  margin-top: 40px;

  @media (min-width: ${SMALL_BREAKPOINT}) {
  }
`


export { Hero }