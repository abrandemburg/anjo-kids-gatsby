import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeartIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "heart-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 260) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img alt="Ícone de coração" fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default HeartIcon
