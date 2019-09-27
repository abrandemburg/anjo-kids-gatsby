import React from "react"
import Layout from "../components/layout"
import FeatureBox from "../components/featureBox"
import Banner from '../components/banner'

const IndexPage = () => {
    return (
        <Layout>
            <div className="main-content">
                <div><Banner /></div>
                <div className="features-box">
                    <FeatureBox />
                    <FeatureBox />
                    <FeatureBox />
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage