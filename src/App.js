import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
//layouts
import MainLayout from './layouts/MainLayout'
//hoc
import WithAuth from './hoc/withAuth'

//pages
import Homepage from './components/pages/Homepage'
import Registration from './components/pages/Registration'
import Login from './components/pages/Login'
import Recovery from './components/pages/Recovery'
import Dashboard from './components/pages/Dashboard'
import './default.scss'

import { auth, handleUserProfile } from './firebase/utils'
import { setCurrentUser } from './redux/User/user.actions'


const App = props =>{

  const dispatch = useDispatch()

  useEffect(()=>{
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }))
        })
      }
      dispatch(setCurrentUser(userAuth))
    })
    return () => {
      authListener()
    }
  }, [])

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
        <Route exact path="/login" render={()=> (
          <MainLayout>
            <Login />
          </MainLayout>
        )}/>
        <Route exact path="/recovery" render={()=> (
          <MainLayout>
            <Recovery/>
          </MainLayout>
        )}/>
        <Route exact path="/dashboard" render={()=>
          <WithAuth>
            <MainLayout>
              <Dashboard/>
            </MainLayout>
          </WithAuth>
        }/>
      </Switch>
    </div>
  )
}


export default App;
