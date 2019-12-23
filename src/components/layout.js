import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import WhatsappLogo from "./icons/whatsappLogo"

const Layout = (props) => {
    return (
        <article className={layoutStyles.layoutGrid}>
            <Header />
            <main className={layoutStyles.content}>
                {props.children}
            </main>
            <div className={layoutStyles.floatIcon}>
                <a href="https://api.whatsapp.com/send?phone=552199182359">
                    <div className={layoutStyles.logoCase}><WhatsappLogo /></div>
                </a>
            </div>
           <Footer />
        </article>
    )
}

export default Layout