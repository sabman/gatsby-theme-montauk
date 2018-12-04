import styled from "styled-components";
import { SMALL_BREAKPOINT } from "./breakpoints"

const Navbar = styled.div`
  display: grid;
  grid-auto-flow: row;

  padding: 1rem 0;

  text-align: center;
  text-transform: uppercase;

  border-bottom-style: solid;
  border-bottom-color: rgba(0,0,0,.1);
  border-bottom-width: 2px;

  @media (min-width: ${SMALL_BREAKPOINT}) {
    grid-auto-flow: column;
  }

`

export { Navbar }
