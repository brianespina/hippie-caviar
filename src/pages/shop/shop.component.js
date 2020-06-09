import React, { Component }from 'react'
import { withRouter } from 'react-router-dom'
import { SHOP_DATA } from './shop.data'

import CollectionPreview from '../../components/preview-collection/preview-collections.component'

class ShopPage extends Component{
    constructor(){
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const { collections } = this.state

        return(
            <div className="shop-page">
                {
                    collections.map(({ id, ...other}) =>(
                        <CollectionPreview key={id} {...other}/>
                    ))
                }
            </div>
        )
    }
}

export default withRouter(ShopPage)