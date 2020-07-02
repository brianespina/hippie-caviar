import React, { useState, useEffect }from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { resetPassword } from '../../redux/User/user.actions'
import './styles.scss'
import AuthWrapper from '../AuthWrapper'
import FormInput from '../forms/FormInput'
import Button from '../forms/Button'


const mapState = ({user}) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    resetPasswordError: user.resetPasswordError
})

function EmailPassword(props){
    const configAuthWrapper = {
        headline: 'Email password'
    }
    const {resetPasswordSuccess, resetPasswordError} = useSelector(mapState)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        if(resetPasswordSuccess){
            props.history.push('/login')
        }
    }, [resetPasswordSuccess])

    useEffect(()=>{
        if(Array.isArray(resetPasswordError) && resetPasswordError.length > 0){
            setErrors(resetPasswordError)
        }
    }, [resetPasswordError])

    async function handleSubmit(event){
        event.preventDefault()
        dispatch(resetPassword({ email }))
    }
    return(
        <AuthWrapper {...configAuthWrapper}>
            {errors.length > 0 && errors.map((err, index) => (
                <p key={index}>
                    { err }
                </p>
            ))}
            <form onSubmit={handleSubmit}>
                <FormInput 
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button>
                    Send to Email
                </Button>
            </form>
        </AuthWrapper>
    )
}

export default withRouter(EmailPassword)