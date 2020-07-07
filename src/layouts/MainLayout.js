import React from 'react'
import Header from '../components/header/header.component'

function MainLayout(props) {
    return(
        <div>
        <Header/>
            {props.children}
        </div>
        
    )
}

export default MainLayout