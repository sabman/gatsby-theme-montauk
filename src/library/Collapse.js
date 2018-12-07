import 'react-slidedown/lib/slidedown.css'

import styled from "styled-components"
import { SlideDown } from 'react-slidedown'

const Collapse = styled(SlideDown)`

  &.react-slidedown.gm-slidedown {
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;
  }
`
export { Collapse }
