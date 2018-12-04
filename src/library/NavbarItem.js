import styled from "styled-components";
import { SMALL_BREAKPOINT } from "./breakpoints"

const NavbarItem = styled.div`
  padding: 0.3rem 0;

  color: rgba(0,0,0,.2);

  text-transform: uppercase;

  line-height: 1.6em;
  letter-spacing: 1px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;

  @media (min-width: ${SMALL_BREAKPOINT}) {
    color: rgba(0, 0, 0, .5);
  }
`

export { NavbarItem }
