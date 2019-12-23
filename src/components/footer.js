import React from "react"
import footerStyles from './footer.module.scss'
import InstagramLogo from "./icons/instagramLogo"
import FacebookLogo from "./icons/facebookLogo"

const Footer = () => {
    
    return (
        <footer>
            <div className={footerStyles.footer}>
                <address>
                    <div><strong>Anjo Kids Transporte e Turismo LTDA</strong></div>
                    <div>transporteanjokids@gmail.com</div>
                    <div>anjokidstransporte.com.br</div>
                </address>
                <div>
                    <div>Telefone: (21)99186-2359</div>
                    <div>Horário de atendimento: Dias úteis 8h às 21h</div>
                    <div>
                        <p>Redes sociais:</p>
                        <div className={footerStyles.iconGrid}>
                            <div className={footerStyles.instagram}>
                                <a href="https://www.instagram.com/transporteanjokids/"><InstagramLogo /></a>
                            </div>
                            <div className={footerStyles.facebook}>
                            <a href="http://facebook.com/transporteanjokids"><FacebookLogo /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={footerStyles.dev}>Desenvolvido por: André Brandemburg dos Anjos <br/>Contato: (21)96544-8522</div>
        </footer>
    )
}

export default Footer