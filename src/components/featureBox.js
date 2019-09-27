import React from "react"
import featureBoxStyles from './featureBox.module.scss'

const FeatureBox = () => {
    return (
        <div className={featureBoxStyles.featureBox}>
            <div className={featureBoxStyles.featureIconContent}>ICONE</div>
            <h3>TITLE</h3>
            <p>
            Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen 
            book.
            </p>
        </div>
    )
}

export default FeatureBox