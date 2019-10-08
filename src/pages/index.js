import React from "react"
import Layout from "../components/layout"
import AskBox from '../components/askBox'
import DriverIcon from '../components/icons/driverIcon'
import SecurityIcon from '../components/icons/securityIcon'
import HeartIcon from '../components/icons/heartIcon'
import Head from '../components/head'

const IndexPage = () => {


    return (
        <Layout>
            <Head title="Home" />
            <div className="main-content">                

                <div className="container">                    
                    <div className="headline-context">
                        <h1>Transporte escolar ideal para seu filho!</h1>
                        Escolha a segurança e qualidade dos serviços da Anjo Kids, 
                        motoristas treinados e capacitados. Equipe focada e preparada para cuidar 
                        do que mais importa.
                    </div>
                    <div className="blockquote-wrapper">
                        <div className="blockquote">
                            <p>
                            “Sou cliente a alguns anos, completamente satisfeita. Posso sempre contar com a empresa”.
                            </p>
                            <h4>&mdash;Aline S. Freitas<br /><em>Cliente Anjo Kids</em></h4>
                        </div>
                    </div>
                </div>

                <span></span>

                <h2>Por quê escolher a Anjo Kids?</h2>
                <div className="features-box">
                    <div className="feature-box">
                        <div className="feature-icon-content"><DriverIcon /></div>
                        <h3>Motoristas capacitados</h3>
                        <p>
                            Todos os motoristas, e profissionais, da nossa equipe 
                            são capacitadas para suas tarefas e com experiência de sobra. 
                            Todos os cursos exigidos pelo DETRAN em dia. O bem estar 
                            dos nossos profissonais também é uma preocupação para 
                            refletir positivamente na qualidade dos serviços. 
                            
                        </p>
                    </div>
                    <div className="feature-box">
                        <div className="feature-icon-content"><SecurityIcon /></div>
                        <h3>Segurança</h3>
                        <p>
                            Carros revisados e dentro dos padrões de conforto. Acompanhantes 
                            treinadas para garantir o uso adequado dos itens de segurança no interior 
                            do veículo além de manter a organização e bem estar dos passageiros.
                            Motoristas treinados em direção defensiva.
                        
                        </p>
                    </div>
                    <div className="feature-box">
                        <div className="feature-icon-content"><HeartIcon /></div>
                        <h3>Responsabilidade</h3>
                        <p>
                            Trabalhar com crianças exige responsabilidade, temos esta como métrica máxima 
                            dos nossos serviços.
                        </p>
                    </div>
                </div>
                
                <span></span>
                
                <div className="asking">
                    <h2>Perguntas frequentes: </h2>

                    <AskBox firstAsk={
                        "Como inscrever meu filho?"
                        }>
                        <em>É muito simples. Basta clicar no ícone 
                            do whatsapp no canto inferior direito da tela e 
                            enviar uma mensagem de solicitação.
                        </em>
                    </AskBox>
                    <AskBox firstAsk={
                        "Quais bairros atendidos?"
                        }>
                        <em>A principio atendemos somente a Zona Sul do Rio de Janeiro 
                            e Barra da Tijuca.
                        </em>
                    </AskBox>
                    <AskBox firstAsk={
                        "Quais Escolas atendidas?"
                        }>
                        <em>Atendemos principalmente ao Colégio Andrews, 
                            em todos os horários disponíveis. Contudo podemos 
                            atender qualquer outra instituição caso um grupo seja 
                            fechado para este fim. Também temos parceiros que 
                            fazem roteiros outros roteiros, para entendimento 
                            só entrar em contato em algum dos nossos meios de 
                            comunicação.
                        </em>
                    </AskBox>
                    <AskBox firstAsk={
                        "O que fazer caso meu bairro não esteja na lista?"
                        }>
                        <em>Chame-nos no WhatsApp ou email com sua dúvida, detalhe sua necessidade 
                            que retornaremos com a melhor posição possível para atende-lo. Temos outros 
                            parceiros que podem, possivelmente, atender sua necessidade.
                        </em>
                    </AskBox>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage