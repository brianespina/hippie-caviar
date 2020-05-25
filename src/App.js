import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
//layouts
import MainLayout from './layouts/MainLayout'

//pages
import Homepage from './components/pages/Homepage'
import Registration from './components/pages/Registration'
import Login from './components/pages/Login'
import './default.scss'
import { auth } from './firebase/utils'


function App(){

  const [user, setUser] = useState(null)

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      userAuth ? setUser(userAuth) : setUser(null)
    })
  })

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={()=>(
          <MainLayout user={user}>
            <Homepage/>
          </MainLayout>
        )}/>
        <Route exact path="/registration" render={()=>(
          <MainLayout user={user}>
            <Registration/>
          </MainLayout>
        )}/>
        <Route exact path="/login" render={()=> 
          user 
          ? <Redirect to="/" />
          : (<MainLayout user={user}>
              <Login />
            </MainLayout>)
        } />
      </Switch>
    </div>
  )
}

export default App;