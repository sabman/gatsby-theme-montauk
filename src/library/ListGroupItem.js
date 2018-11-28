import styled, { css } from "styled-components";

const ListGroupItem = styled.div`

  ${({ horizontal }) => horizontal && css`
    padding: 0 4px;
  `}
`

export { ListGroupItem }