import "../styles/reboot.css"
import {
  Cell,
} from "../library"

import React from 'react'
import styled from "styled-components"
import Img from 'gatsby-image'
import Layout from "../components/layout"

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 2rem;

  text-align: center;
  text-transform: capitalize;

  margin-top: 40px;

  @media (min-width: 768px) {
    grid-template-columns: auto auto auto;
  }

`

const ShowcaseCell = styled(Cell)`
  span {
    display: inline-block;
    margin-top: 1rem;

    letter-spacing: 1px;

    font-weight: 300;
    font-style: normal;
  }
`

export default class IndexPage extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Layout>
          <ShowcaseGrid>
            {this.props.data.artists.edges.map(({ node }, idx) => {
              return (
                <ShowcaseCell key={idx}>
                  <Img fluid={node.fluid} />
                  <span>{node.fluid.originalName.split("-")[1].split(".")[0]}</span>
                </ShowcaseCell>
              )
            })}
          </ShowcaseGrid>
        </Layout>
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query ArtistsIndexQuery {

    artists: allImageSharp(filter: {
      fluid: {
        originalName: {
          regex: "/artist-/"
        }
      }
    }) {
      edges {
        node {
          fluid(maxWidth: 600, maxHeight: 450) {
            base64
            tracedSVG
            aspectRatio
            src
            sizes
            srcSet
            srcWebp
            srcSetWebp
            originalName
          }
        }
      }
    } 
     

  }
`
