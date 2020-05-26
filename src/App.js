import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
//layouts
import MainLayout from './layouts/MainLayout'

//pages
import Homepage from './components/pages/Homepage'
import Registration from './components/pages/Registration'
import Login from './components/pages/Login'
import './default.scss'
import { auth, handleUserProfile } from './firebase/utils'

const App = () =>{
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(()=>{
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
    return () => {
      authListener()
    }
  }, [])
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={()=>(
          <MainLayout user={currentUser}>
            <Homepage/>
          </MainLayout>
        )}/>
        <Route exact path="/registration" render={()=>(
          <MainLayout user={currentUser}>
            <Registration/>
          </MainLayout>
        )}/>
        <Route exact path="/login" render={()=> 
          currentUser 
          ? <Redirect to="/" />
          : (<MainLayout user={currentUser}>
              <Login />
            </MainLayout>)
        } />
      </Switch>
    </div>
  )
}


export default App;