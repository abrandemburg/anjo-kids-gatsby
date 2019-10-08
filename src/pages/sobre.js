import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'

const Sobre = () => {
    return (
        <Layout>
            <Head title="Sobre Nós" />
            <div className="main-content">
                <div className="about-container">
                <h1>Anjo Kids Transporte Escolar e Turismo LTDA</h1>
                <p>Pensada em 2009 e criada em 2010, a Anjo Kids nasceu de uma necessidade 
                    de um transporte escolar coletivo que atendesse as espectativas de uma serviço de qualidade. 
                    Na época seu idealizador, Junior, teve problemas ao utilizar serviço parecido para seu filho.
                    Foi então que junto a sua irmã, e algum investimento, começaram a Empresa afim de oferecer o mesmo 
                    serviço sem os problemas que esbarraram no passado.<br /></p>
                <p>Hoje a Anjo Kids conta com dezenas de clientes e uma gama de profissionais qualificados 
                para atender todas as expectativas de qualidade do mercado.</p>                 
                
                </div>
            </div>
        </Layout>
    )
}

export default Sobre