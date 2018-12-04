import styled, { css } from "styled-components";
import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT,
} from "./breakpoints"

const breakpointsMap = {
  sm: SMALL_BREAKPOINT,
  md: MEDIUM_BREAKPOINT,
  lg: LARGE_BREAKPOINT,
  xl: XLARGE_BREAKPOINT,
}

const hide = (state) => {
  if (state === undefined) return

  const isInterval = state.includes(",")

  if (isInterval) {
    const screens = state.split(",")
    const smallerBreakpoint = breakpointsMap[screens[0]]
    const largerBreakpoint = breakpointsMap[screens[1]]

    return `
      display: block;

      @media (min-width: ${smallerBreakpoint}) {
        display: none;
      }

      @media (min-width: ${largerBreakpoint}) {
        display: block;
      }
    `
  }

  if (state === 'xs') {
    return `
      display: none;
    `
  }

  const screenBreakpoint = breakpointsMap[state]

  return `
    @media (min-width: ${screenBreakpoint}) {
      display: none;
    }
  `
}

const visible = (state) => {
  if (state === undefined) return

  const isInterval = state.includes(",")

  if (isInterval) {
    const screens = state.split(",")
    const smallerBreakpoint = breakpointsMap[screens[0]]
    const largerBreakpoint = breakpointsMap[screens[1]]

    return `
      display: none;

      @media (min-width: ${smallerBreakpoint}) {
        display: block;
      }

      @media (min-width: ${largerBreakpoint}) {
        display: none;
      }
    `
  }

  const screenBreakpoint = breakpointsMap[state]

  return `
    display: none;

    @media (min-width: ${screenBreakpoint}) {
      display: block;
    }
  `
}

/*
  Why? We need a way to conditional show and hide elements.
  TODO: Detemine if we want visibility functions for all library elements

  props.hide
    > hidden on screen and up
      >> xs: hidden on all
      >> sm: hidden on sm and up
      >> md: hidden on md and up
      >> lg: hidden on lg and up
    > Hidden on an interval
      >> sm,lg: hidden between sm and lg

  props.visible
  > visible on screen and up
    >> xs: visible on all
    >> sm: visible on sm and up
    >> md: visible on md and up
    >> lg: visible on lg and up
  > visible on an interval
    >> sm,lg: visible between sm and lg

  NOTE: For visbility, hidden takes precedence
*/

const Cell = styled.div`

  ${(props) => hide(props.hide)}
  ${(props) => visible(props.visible)}
`

export { Cell }
