import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MapaAtuacao = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mapa-atuacao.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img alt="Imagem retirada do google maps destacando algumas áreas" fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default MapaAtuacao
