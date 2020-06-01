import userTypes from './user.types'
import { auth, handleUserProfile } from '../../firebase/utils'

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})

export const signInUser = ({email, password}) => async dispatch => {
    try{
        await auth.signInWithEmailAndPassword(email, password)
        dispatch({
            type: userTypes.SIGN_IN_SUCCESS,
            payload: true
        })
    }catch(err){
        // console.log(err)
    }
}

export const signUpUser = ({ displayName, email, password, confirmPassword }) => async dispatch => {
    if(password !== confirmPassword){
        const error = ['Password Don\'t match']
        dispatch({
            type: userTypes.SIGN_UP_ERROR,
            payload: error
        })
        return
    }
    try{
        const { user } = await auth.createUserWithEmailAndPassword(email, password)
        await handleUserProfile(user, { displayName })
        dispatch({
            type: userTypes.SIGN_UP_SUCCESS,
            payload: true
        })
        // resetState()
        // props.history.push('/')
    }catch(err){
        // console.log(err)
    }
}