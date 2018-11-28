import "../styles/reboot.css"

import {
  Grid,
  Cell,
  Navbar,
  NavbarItem,
  ListGroup,
  ListGroupItem,
  Collapse,
  CollapseButton,
  Hero,
  HeroTitle,
  Section,
  SectionHeader,
  SectionBody,
  Icon,
  Footer,
} from "../library"

import React from 'react'

import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


export default class IndexPage extends React.Component {

  state = {
    open: false,
  }
  
  handleMenuClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {

    console.log(this.props.data)


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
            <CollapseButton onClick={this.handleMenuClick}>menu</CollapseButton>
          </Cell>
          <Cell>
            <Section>
              <Img fixed={this.props.data.logo.fixed} />
              <ListGroup>
                <ListGroupItem>51 edgemere street</ListGroupItem>
                <ListGroupItem>montauk, ny, 11954</ListGroupItem>
                <ListGroupItem>(800) 123-4567</ListGroupItem>
              </ListGroup>
            </Section>
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
              <ListGroup horizontal>
                <ListGroupItem horizontal>
                  <Icon icon={faGithub} />
                </ListGroupItem>
                <ListGroupItem horizontal>
                  <Icon icon={faLinkedin} />
                </ListGroupItem>
                <ListGroupItem horizontal>
                  <Icon icon={faTwitter} />
                </ListGroupItem>
              </ListGroup>
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


