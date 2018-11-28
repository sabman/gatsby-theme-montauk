import styled, { css } from "styled-components";

const ListGroup = styled.div`
  width: 100%;

  padding: 15px 0;

  color: rgba(0,0,0,.3);
  line-height: 2em;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 3px;

  font-size: 14px;
  font-weight: 600;
  font-style: normal;

  text-align: center;

  ${({ horizontal }) => horizontal && css`
    display: flex;
    flex-direction: row;
  `}
`

export { ListGroup }