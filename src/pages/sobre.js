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
                <p>Há mais de 20 anos atuando no transporte escolar junto ao colégio Andrews, 
                    conquistamos confiança da direção do colégio e dos pais responsáveis pelos alunos. 
                    Conforto, segurança, respeito e pontualidade são atributos indispensáveis para a excelência de nossos serviços.<br /></p>
                <p>A frota é renovada, revisada constantemente e vistoriada pelo DETRAN e CMTR conforme a lei que rege o transporte escolar.</p>                 
                
                </div>
            </div>
        </Layout>
    )
}

export default Sobre