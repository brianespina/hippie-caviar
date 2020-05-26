import React, { useState } from 'react'
import './styles.scss'
import Button from './../../components/forms/Button'
import { signInWithGoogle, auth } from './../../firebase/utils'
import FormInput from '../forms/FormInput'


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

    return(
        <div className="signin">
            <div className="wrap">
                <h2>Login</h2>
                <div className="formwrap">
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
                </div>
            </div>
        </div>
    )
}

export default Signin