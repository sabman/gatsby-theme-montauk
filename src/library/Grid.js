import styled from "styled-components";

import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT,
} from "./breakpoints"


const Grid = styled.div`
  display: grid;
  padding: 0 1rem;

  @media (min-width: ${MEDIUM_BREAKPOINT}) {
    padding: 6rem 6rem 0rem 6rem;
  }

  @media (min-width: ${XLARGE_BREAKPOINT}) {
    border: 2px solid rgba(0, 0, 0, 0.1);
    max-width: 1200px;
    margin: 4rem auto 0 auto;
  }


`

export { Grid }