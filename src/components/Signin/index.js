import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInUser } from '../../redux/User/user.actions'
import './styles.scss'
import Button from './../../components/forms/Button'
import { signInWithGoogle } from './../../firebase/utils'
import FormInput from '../forms/FormInput'
import { Link, withRouter } from 'react-router-dom'
import AuthWrapper from '../AuthWrapper'

const mapState = ({ user }) => ({
    signInSuccess: user.signInSuccess
})

const Signin = props => {

    const { signInSuccess } = useSelector(mapState)
    const dispatch = useDispatch()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')


    useEffect(()=>{
        if(signInSuccess){
            resetState()
            props.history.push('/')
        }
    }, [signInSuccess])
    
    const resetState = () =>{
        setEmail('')
        setPassword('')
    }

    const handleSubmit = event =>{
        event.preventDefault()
        dispatch(signInUser({email, password}))
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
            <Link to="/recovery">
                Forgot password? 
            </Link>
        </AuthWrapper>
    )
}

export default withRouter(Signin)