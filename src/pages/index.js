import "../styles/reboot.css"

import React from 'react'
import { Link } from 'gatsby'

import styled, { keyframes } from "styled-components";
import { CSSTransition } from 'react-transition-group';



const GMNav = styled.nav`
  color: black;

  max-height: ${props => props.isOpen ? "100%" : "0" };
  overflow: ${props => props.isOpen ? "visible" : "hidden" };
  visibility: ${props => props.isOpen ? "visible" : "hidden" };

  ${'' /* transition: max-height,.3s; */}
`

const GMNavList = styled.ul`
  padding-inline-start: 0;
  margin-bottom: 0;
`
const GMNavListItem = styled.li`
  list-style-type: none;
  text-align: center;
`

const GMNavButton = styled.div`
  text-align: center;
  border: 1px solid black;

`


export default class IndexPage extends React.Component {

  state = {
    open: false,
  }
  
  handleMenuClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <React.Fragment>
        <GMNav isOpen={this.state.open}>
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
