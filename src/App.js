import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import './default.scss'

function App (){
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
      </Switch>
    </div>
  )
}

export default App;
