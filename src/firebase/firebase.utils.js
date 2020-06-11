import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBfrHouEpWQjvEqKV9Vy_fFPjImVmLcSMc",
    authDomain: "hippie-caviar.firebaseapp.com",
    databaseURL: "https://hippie-caviar.firebaseio.com",
    projectId: "hippie-caviar",
    storageBucket: "hippie-caviar.appspot.com",
    messagingSenderId: "694810606499",
    appId: "1:694810606499:web:77ecf7a910057948bbb816"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()

    if(!snapshot.exists){
        const { displayName, email} = userAuth
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message)
        }
    }

    return userRef
} 

export default firebase
