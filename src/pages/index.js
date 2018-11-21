import "../styles/reboot.css"

import React from 'react'
import { Link } from 'gatsby'

import styled, { keyframes } from "styled-components";


const OpenAnimation = keyframes`
  0% { max-height: 0; }
  100% { max-height: 8rem; }
`;

const GMNav = styled.nav`
  color: black;
`

const GMNavList = styled.ul`
  padding-inline-start: 0;

  /* Animation */
  animation: ${OpenAnimation} 0.5s linear infinite;
`
const GMNavListItem = styled.li`
  list-style-type: none;
  text-align: center;
`

const GMNavButton = styled.div`
  text-align: center;
`


export default class IndexPage extends React.Component {

  state = {
    open: false,
  }
  
  handleMenuClick = () => {
    console.log('ddddd')
  }

  render() {
    return (
      <React.Fragment>
        <GMNav>
          <GMNavList>
            <GMNavListItem>
              <Link to="#">artists</Link>
            </GMNavListItem>
            <GMNavListItem>
              <Link to="#">blog</Link>
            </GMNavListItem>
            <GMNavListItem>
              <Link to="#">contact</Link>
            </GMNavListItem>
            <GMNavListItem>
              <Link to="#">shop</Link>
            </GMNavListItem>
            <GMNavListItem>
              <Link to="#">about</Link>
            </GMNavListItem>
          </GMNavList>
        </GMNav>
        <GMNavButton onClick={this.handleMenuClick}>
          <button>menu</button>
        </GMNavButton>
    
      </React.Fragment>
    )
  }
}
