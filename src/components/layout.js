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
  Section,
  Icon,
  Footer,
} from "../library"

import React from 'react'

import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const pages = [
  {
    url: '/artists',
    name: 'artists',
  },
  {
    url: '/blog',
    name: 'blog',
  },
  {
    url: '/contact',
    name: 'contact',
  },
  {
    url: '/shop',
    name: 'shop',
  },
  {
    url: '/about',
    name: 'about',
  },
]

export default class Layout extends React.Component {

  state = {
    open: false,
  }

  handleMenuClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {

    const navItems = pages.map((item, idx) => (
      <NavbarItem as={Link} key={idx} to={item.url}>{item.name}</NavbarItem>
    ))

    return (
      <React.Fragment>
          <Grid>
            <Cell
              hide={[`md`]}
            >
              <Collapse className={`gm-slidedown`}>
                {this.state.open ? (
                    <Navbar>
                      {navItems}
                    </Navbar>
                  ) : null
                }
              </Collapse>
              <CollapseButton onClick={this.handleMenuClick}>menu</CollapseButton>
            </Cell>
            <Cell>
              <Section>
              <StaticQuery
                query={graphql`
                  query {
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
                  }
                `}
                render={data => (
                  <Link to="/">
                    <Img fixed={data.logo.fixed} />
                  </Link>
                )}
              />
                <ListGroup>
                  <ListGroupItem>51 edgemere street</ListGroupItem>
                  <ListGroupItem>montauk, ny, 11954</ListGroupItem>
                  <ListGroupItem>(800) 123-4567</ListGroupItem>
                </ListGroup>
              </Section>
            </Cell>
            <Cell
              visible={[`md`]}
            >
              <Navbar>
                {navItems}
              </Navbar>
            </Cell>
            <Cell>
              {this.props.children}
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
