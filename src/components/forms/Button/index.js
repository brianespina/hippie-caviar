import React from 'react'
import './styles.scss'

const Button = ({children, ...other}) => {
    return(
        <button className="button" {...other}>
            {children}
        </button>
    )
}

export default Button 