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

  @media (min-width: ${SMALL_BREAKPOINT}) {
    padding: 6rem 6rem 0rem 6rem;
  }

`

export { Grid }