import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
//layouts
import MainLayout from './layouts/MainLayout'

//pages
import Homepage from './components/pages/Homepage'
import Registration from './components/pages/Registration'
import Login from './components/pages/Login'
import './default.scss'
import { auth } from './firebase/utils'

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

  authListener = null
  
  componentDidMount(){
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if(!userAuth) {
        this.setState({
          ...initialState
        })
      }

      this.setState({
        currentUser: userAuth
      })
    })
  }

  componentWillUnmount(){
    this.authListener()
  }
  
  render(){

    let { currentUser } = this.state

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={()=>(
            <MainLayout currentUser={currentUser}>
              <Homepage/>
            </MainLayout>
          )}/>
          <Route exact path="/registration" render={()=>(
            <MainLayout currentUser={currentUser}>
              <Registration/>
            </MainLayout>
          )}/>
          <Route exact path="/login" 
          render={()=> currentUser ? <Redirect to="/" /> : (
            <MainLayout currentUser={currentUser}>
              <Login/>
            </MainLayout>
          )}/>
        </Switch>
      </div>
    )
  }

}


export default App;
