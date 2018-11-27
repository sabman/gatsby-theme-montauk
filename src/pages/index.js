import "../styles/reboot.css"

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styled, { createGlobalStyle } from "styled-components";
import { CSSTransition } from 'react-transition-group';

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'


const GlobalStyle = createGlobalStyle`
  html,
  body,
  #___gatsby,
  #___gatsby > div {
    width: 100%;
    height: 100%;
  }
`

const Grid = styled.div`
  display: grid;
  padding: 0 1rem;
`

const Cell = styled.div`
`

const Navbar = styled.div`
  display: grid;

  padding: 1rem 0;

  text-align: center;
  text-transform: uppercase;
  
  border-bottom-style: solid;
  border-bottom-color: rgba(0,0,0,.1);
  border-bottom-width: 2px;
`

const NavbarItem = styled.div`
  padding: 0.3rem 0;

  color: rgba(0,0,0,.2);

  text-transform: uppercase;

  line-height: 1.6em;
  letter-spacing: 1px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
`

const NavbarButton = styled.div`
  padding: 15px 0;

  color: rgba(0,0,0,.5);

  text-align: center;
  text-transform: uppercase;

  line-height: 1.6em;
  letter-spacing: 1px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;

  border-bottom-style: solid;
  border-bottom-color: rgba(0,0,0,.1);
  border-bottom-width: 2px;
`

const Header = styled.div`
  padding: 30px 0;
  text-align: center;
`

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
`

const ListGroupItem = styled.div`
`

const Hero = styled.div`
  position: relative;
`

const HeroTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 1;

  font-size: 21px;

  color: white;
  text-transform: uppercase;
  text-align: center;
`

const Section = styled.div`
  text-align: center;
  margin: 40px 0;
`

const SectionBody = styled.p`
  text-align: left;
  font-size: 14px;
  line-height: 1.8em;
  text-transform: none;
  text-decoration: none;
  font-weight: 300;
  font-style: normal;
  margin: 0 0 1.8em;
`

const SectionHeader = styled.h3`
  margin: 1em 0 .3em;
  font-size: 1.1em;
  line-height: 1.5em;
  text-transform: none;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 400;
  font-style: normal;
`

const Footer = styled.div`
  padding: 50px 0;

  border-top-style: solid;
  border-top-color: rgba(0,0,0,.1);
  border-top-width: 2px;
`

const Collapse = styled(SlideDown)`

  &.react-slidedown.gm-slidedown {
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;
  }
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
        <Grid>
          <Cell>
            <Collapse className={`gm-slidedown`}>
              {this.state.open ? (
                  <Navbar>
                    <NavbarItem>artists</NavbarItem>
                    <NavbarItem>blog</NavbarItem>
                    <NavbarItem>contact</NavbarItem>
                    <NavbarItem>shop</NavbarItem>
                    <NavbarItem>about</NavbarItem>
                  </Navbar>
                ) : null
              }
            </Collapse>
            <NavbarButton onClick={this.handleMenuClick}>menu</NavbarButton>
          </Cell>
          <Cell>
            <Header>
              <Img fixed={this.props.data.logo.fixed} />
              <ListGroup>
                <ListGroupItem>51 edgemere street</ListGroupItem>
                <ListGroupItem>montauk, ny, 11954</ListGroupItem>
                <ListGroupItem>(800) 123-4567</ListGroupItem>
              </ListGroup>
            </Header>
          </Cell>
          <Cell>
            <Hero>
              <HeroTitle>welcome</HeroTitle>
              <Img fluid={this.props.data.wilderness.fluid} />
            </Hero>
            <Section>
              <SectionBody>
                Vestibulum id ligula porta felis euismod semper. 
                Etiam porta sem malesuada magna mollis euismod. 
                Nulla vitae elit libero, a pharetra augue. Nullam id dolor 
                id nibh ultricies vehicula ut id elit. Praesent commodo cursus 
                magna, vel scelerisque nisl consectetur et. Sed posuere consectetur 
                est at lobortis. Donec ullamcorper nulla non metus auctor fringilla. 
                Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo 
                quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. 
                Maecenas sed diam eget risus varius blandit sit
                amet non magna. Cras mattis consectetur purus sit amet fermentum.
              </SectionBody>
              <SectionHeader>
                <Link to="/" style={{ color: "black" }}>
                  View Artists &nbsp;→
                </Link>
              </SectionHeader>
            </Section>
          </Cell>
          <Cell>
            <Footer>
                Made by Gatsby Manor
            </Footer>
          </Cell>
        </Grid>
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    logo: imageSharp(fluid: {  originalName: { regex: "/mlogo/"} }) {
      fixed(height: 100, width: 120) {
        base64
        tracedSVG
        aspectRatio
        width
        height
        src
        srcSet
        srcWebp
        srcSetWebp
        originalName
      }
    }

    wilderness: imageSharp(fluid: {  originalName: { regex: "/wilderness/"} }) {
      fluid {
        base64
        tracedSVG
        aspectRatio
        sizes
        src
        srcSet
        srcWebp
        srcSetWebp
        originalName
      }
    }

  }
`


