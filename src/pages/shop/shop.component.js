import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop.selectors' 

import CollectionPreview from '../../components/preview-collection/preview-collections.component'

function ShopPage ({ collections }) {
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

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(withRouter(ShopPage))