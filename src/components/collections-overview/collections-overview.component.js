import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview  from '../preview-collection/preview-collections.component'
import './collections-overview.style.scss'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...other}) =>(
                <CollectionPreview key={id} {...other}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)