import styled from "styled-components";
import { SMALL_BREAKPOINT } from "./breakpoints"

const Section = styled.div`
  margin-top: 40px;
  text-align: center;

  @media (min-width: ${SMALL_BREAKPOINT}) {
    padding-left: 6rem;
    padding-right: 6rem;
  }

`

export { Section }