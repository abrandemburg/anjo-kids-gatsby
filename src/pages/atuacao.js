import React from "react"
import Layout from "../components/layout"
import MapaAtuacao from '../components/mapaAtuacao'
import Head from '../components/head'

const Atuacao = () => {
    return (
        <Layout>
            <Head title="Atuação" />
            <div className="main-content">
                <div className="container">
                    <h1>Mapa de área de atuação Anjo Kids</h1>
                    <p>
                        A Anjo Kids, hoje, atua em toda a Zona Sul do Rio de Janeiro.                        
                    </p>
                    <MapaAtuacao />
                </div>
            </div>
        </Layout>
    )
}

export default Atuacao