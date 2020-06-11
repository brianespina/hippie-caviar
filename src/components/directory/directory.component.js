import React, { Component } from 'react'
import MenuItem from './../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends Component{
    constructor(props){
        super(props)

        this.state = {
            section: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'mens'
                }
            ]
        }
    }

    render(){
        const menuitems = this.state.section.map(item => (
            <MenuItem props={item} />
        ))
        return(
            <div className="directory-menu">
                { 
                    this.state.section.map(({ id, ...other}) => (
                        <MenuItem key={id} {...other}/>
                    ))  
                }
            </div>
        )
    }
}

export default Directory