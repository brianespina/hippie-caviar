import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selector'

import MenuItem from './../menu-item/menu-item.component'
import './directory.styles.scss'

function Directory ({ section }) {
  const menuitems = section.map(item => (
      <MenuItem props={item} />
  ))
  return(
      <div className="directory-menu">
          { 
              section.map(({ id, ...other}) => (
                  <MenuItem key={id} {...other}/>
              ))  
          }
      </div>
  )
}

const mapStateToProps = createStructuredSelector({
  section: selectDirectorySections
})
export default connect(mapStateToProps)(Directory)