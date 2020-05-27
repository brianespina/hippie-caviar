import React, { useState } from 'react'
import FormInput from '../forms/FormInput'
import Button from '../forms/Button'
import { auth, handleUserProfile } from '../../firebase/utils'
import AuthWrapper from '../AuthWrapper'

import './styles.scss'

const Signup = () =>{

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

    const handleFormSubmit = async event => {
        event.preventDefault()
        if(password !== confirmPassword){
            const error = ['Password Don\'t match']
            setErrors(error)
            return
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await handleUserProfile(user, { displayName })
            resetState()
        }catch(err){
            // console.log(err)
        }
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

export default Signup

