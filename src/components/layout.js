import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <article className={layoutStyles.layoutGrid}>
            <Header />
            <main className={layoutStyles.content}>
                {props.children}
            </main>
           <Footer />
        </article>
    )
}

export default Layout