import React from 'react'
import { Route, Switch } from 'react-router-dom'

//PAGES
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component'

import Header from './components/header/header.component'

//firebase
import { auth } from './firebase/firebase.utils'

import './default.scss'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return(
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    )
  }
}

export default App;
