import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//PAGES
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component'
import CheckoutPage from './pages/checkout/checkout.component'
import Dashboard from './pages/dashboard/dashboard.component'

//components
import AdminBar from './components/admin-bar/admin-bar.component'
import IsAdmin from './components/is-admin-wrapper/is-admin.component'

//Layouts
import Header from './components/header/header.component'

//firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

//redux
import { createStructuredSelector } from 'reselect'
import { setCurrentUser } from './redux/user/user.actions'  
import { selectCurrentUser } from './redux/user/user.selector'
 
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
      <div className={ this.props.currentUser && this.props.currentUser.isAdmin && "admin-logged-in"}>
          <Header />
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route path='/shop' component={ShopPage}/>

            <Route exact path='/signin' render={() => 
              this.props.currentUser 
              ? <Redirect to='/' />
              : <SignInAndSignUp />
            }/>
            <IsAdmin msg>
              <Route exact path='/dashboard' component={Dashboard} />
            </IsAdmin>
            
          </Switch>

          <IsAdmin>
            <AdminBar user={this.props.currentUser}/>
          </IsAdmin>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
