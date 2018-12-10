import "../styles/reboot.css"

import {
  Hero,
  HeroTitle,
  Section,
  SectionHeader,
  SectionBody,
} from "../library"

import React from 'react'
import Layout from "../components/layout"

import Img from 'gatsby-image'
import { Link } from 'gatsby'

export default class IndexPage extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Layout>
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
        </Layout>

      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {

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
