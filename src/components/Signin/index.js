import React, { useState } from 'react'
import './styles.scss'
import Button from './../../components/forms/Button'
import { signInWithGoogle, auth } from './../../firebase/utils'
import FormInput from '../forms/FormInput'
import { Link } from 'react-router-dom'
import AuthWrapper from '../AuthWrapper'


function Signin(props){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

    const resetState = () =>{
        setEmail('')
        setPassword('')
    }

    const handleSubmit = async event =>{
        event.preventDefault()
        try{
            await auth.signInWithEmailAndPassword(email, password).catch(error => {
                resetState()
                const errorMessage = error.message
                if(errorMessage){setErrors(errorMessage)}
            })
        }catch(err){
            // console.log(err)
        }
        
    }

    const configAuthWrapper = {
        headline: 'Sign in'
    }

    return(
        <AuthWrapper {...configAuthWrapper}>
            {errors && (
                <p>
                    {errors}
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <FormInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button>
                    Sign In
                </Button>
            </form>
            <div className="socialSignin">
                <Button onClick={signInWithGoogle}>
                    Sign In with Google
                </Button>
            </div>
            <Link>
                Forgot password? 
            </Link>
        </AuthWrapper>
    )
}

export default Signin