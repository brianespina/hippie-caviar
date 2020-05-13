import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { auth } from './firebase/utils'

//layouts
import MainLayout from './layouts/MainLayout'

//pages
import Homepage from './components/pages/Homepage'
import Registration from './components/pages/Registration'
import Login from './components/pages/Login'
import './default.scss'

const initialState = {
  currentUser: null
}

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      ...initialState
    }
  }
  
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
