import styled from "styled-components";
import { 
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT,
} from "./breakpoints"

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

    margin-top: 40px;

    width: 500px;
    margin: 0 auto;

    border-bottom-style: none;
    border-bottom-color: transparent;
    border-bottom-width: 0;
  }

  @media (min-width: ${MEDIUM_BREAKPOINT}) {
    margin: 0 auto;
  }

  @media (min-width: ${LARGE_BREAKPOINT}) {

  }

  @media (min-width: ${XLARGE_BREAKPOINT}) {

  }

`

export { Navbar }
