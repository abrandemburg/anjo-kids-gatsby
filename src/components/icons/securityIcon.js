import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DriverIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "security-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 260) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img alt="Ícone de escudo de segurança" fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default DriverIcon
