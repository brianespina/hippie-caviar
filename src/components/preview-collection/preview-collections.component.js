import React from 'react'
import { Link } from 'react-router-dom' 
import CollectionItem from '../collection-item/collection-item.component'
import './preview-collection.styles.scss'


const CollectionPreview = ({ title, items, routeName }) => (
    <div className='collection-preview'>
        <h1 className="title"><Link to={`/shop/${routeName}`}>{title.toUpperCase()}</Link></h1>
        <div className='preview'>
            {items
            .filter((item, index) => index < 4)
            .map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
)

export default CollectionPreview