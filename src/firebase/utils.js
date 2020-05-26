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

export const handleUserProfile = async (userAuth, additionalData) => {
    if(!userAuth){return}

    const { uid } = userAuth

    const userRef = firestore.doc(`users/${uid}`)
    const snapshot = await userRef.get()

    if(!snapshot.exists){
        const { displayName, email } = userAuth
        const timeStamp = new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createDate: timeStamp,
                ...additionalData
            })
        }catch(err){
            // console.log(err)
        }
    }
    return userRef
}















































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

