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




//icons and image injections this is on Site Settings > Advanced > Body Code

document.addEventListener("DOMContentLoaded", function(event) {
	const icon = document.createElement('I')
	icon.classList.add('fas', 'fa-home')
	const heroButton = document.querySelector('.hero-btn-wrap .button')
	if (heroButton) heroButton.appendChild(icon)

  const headerList = document.querySelector('.top-header .contact-info') || false
  if(headerList ){
    const emailElement = document.createElement('LI')
    emailElement.innerHTML = '<a href="/contact/"><i class="fa fa-envelope"></i></a>'
    headerList.appendChild(emailElement)
  }
	

	const emailElementFooter = document.createElement('div')
        emailElementFooter.innerHTML = '<a href="/contact/"><i class="fa fa-envelope"></i></a>'
	const footerlist = document.querySelector('.footer .contact-details')
	footerlist.appendChild(emailElementFooter)

  //property boxes equal height
  function setBoxHeight(){
    const propertyBoxes = document.querySelectorAll('.columns.property-item')
    propertyBoxes.forEach(box => {
      box.style.height = `${getMaxHeight(propertyBoxes)}px`
    })	
  }

  function getMaxHeight(element){
    const boxesHeight = []
    element.forEach(box => boxesHeight.push(box.offsetHeight))
    return(Math.max(...boxesHeight))
  }

  function loaderListener(){
    let interval = setInterval(() => {
      let isStillLoading = document.querySelector('.loader-wrap')
      if(!isStillLoading){
        setBoxHeight()
        clearInterval(interval)
      }
    },300)
  }
  loaderListener()
})