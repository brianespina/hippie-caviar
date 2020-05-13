import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'

//layouts
import MainLayout from './layouts/MainLayout'

//pages
import Homepage from './components/pages/Homepage'
import Registration from './components/pages/Registration'
import './default.scss'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={()=>(
          <MainLayout>
            <Homepage/>
          </MainLayout>
        )}/>
        <Route exact path="/registration" render={()=>(
          <MainLayout>
            <Registration/>
          </MainLayout>
        )}/>
      </Switch>
    </div>
  );
}

export default App;
