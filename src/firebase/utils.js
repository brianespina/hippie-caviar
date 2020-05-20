import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)

export const auth = new firebase.auth()
export const firestore = new firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
export const signOut = () => auth.signOut()















































// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'

// import { firebaseConfig } from './config'

// firebase.initializeApp(firebaseConfig)
// export const auth = new firebase.auth()
// export const firestore = new firebase.firestore()


// const googleProvider = new firebase.auth.GoogleAuthProvider()
// googleProvider.setCustomParameters({prompt: 'select_account'})

// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

