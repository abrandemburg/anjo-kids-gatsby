import React from "react"
import askBoxStyles from './askBox.module.scss'

const AskBox = ( props ) => {
    return (
       <div className={askBoxStyles.askBox}>
           <div>{props.firstAsk}</div>
           <div>{props.children}</div>
       </div>
    )
}

export default AskBox