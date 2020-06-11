import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

//PAGES
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component'

import Header from './components/header/header.component'

//firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

//redux
import { setCurrentUser } from './redux/user/user.actions'  

import './default.scss'

class App extends React.Component{

  unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          console.log(this.state)
        })

      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
