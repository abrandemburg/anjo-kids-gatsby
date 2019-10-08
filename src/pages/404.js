import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <div className="main-content">
                <div className="notfound-container">
                    <h1>Página não existente!</h1>
                    <Link
                        className="back"
                        to="/"
                    >
                        Ir para página inicial
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default NotFound