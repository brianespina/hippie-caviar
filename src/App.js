import React from 'react'
import { Switch, Route } from 'react-router-dom'

//layouts
import MainLayout from './layouts/MainLayout'

//pages
import Homepage from './components/pages/Homepage'
import Registration from './components/pages/Registration'
import Login from './components/pages/Login'
import './default.scss'

class App extends React.Component{

  render(){
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
          <Route exact path="/login" render={()=>(
            <MainLayout>
              <Login/>
            </MainLayout>
          )}/>
        </Switch>
      </div>
    )
  }

}


export default App;
