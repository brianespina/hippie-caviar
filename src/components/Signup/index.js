import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUpUser} from '../../redux/User/user.actions'
import { withRouter } from 'react-router-dom'
import FormInput from '../forms/FormInput'
import Button from '../forms/Button'
import { auth, handleUserProfile } from '../../firebase/utils'
import AuthWrapper from '../AuthWrapper'

import './styles.scss'

const mapsState = ({ user }) => ({
    signUpSuccess: user.signUpSuccess,
    signUpError: user.signUpError
})
const Signup = props =>{
    const {signUpSuccess, signUpError} = useSelector(mapsState)
    
    const dispatch = useDispatch()
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])

    const resetState = () =>{
        setDisplayName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setErrors([])
    }

    useEffect(()=>{
        if(signUpSuccess){
            resetState() 
            props.history.push('/')
        }
    }, [signUpSuccess])

    useEffect(()=>{
        if(Array.isArray(signUpError) && signUpError.length > 0){
            setErrors(signUpError)
        }
    }, [signUpError])

    const handleFormSubmit = event => {
        event.preventDefault()
        dispatch(signUpUser({
            displayName,
            email,
            password,
            confirmPassword
        }))
        
    }
    const configAuthWrapper = {
        headline: "Sign up"
    }
    return(

        <AuthWrapper {...configAuthWrapper}>
            {errors.length > 0 && (
                <ul>
                    {errors.map((err, index) => {
                        return(
                            <li key={index}>
                                {err}
                            </li>
                        )
                    })}
                </ul>
            )}
            <form onSubmit={handleFormSubmit}>
                <FormInput 
                    type="text"
                    name="displayName"
                    value={displayName}
                    placeholder="Full Name"
                    onChange={e => setDisplayName(e.target.value)}
                />
                <FormInput 
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />
                <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <FormInput 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    placeholder="Password"
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <Button>
                    Register
                </Button>
            </form>
        </AuthWrapper>
    )
}

export default withRouter(Signup)

