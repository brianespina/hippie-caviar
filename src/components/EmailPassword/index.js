import React, { useState }from 'react'
import { withRouter } from 'react-router-dom'
import './styles.scss'
import AuthWrapper from '../AuthWrapper'
import FormInput from '../forms/FormInput'
import Button from '../forms/Button'
import { auth } from '../../firebase/utils'

function EmailPassword(props){
    const configAuthWrapper = {
        headline: 'Email password'
    }
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])

    async function handleSubmit(event){
        event.preventDefault()
        try{
            const config = {
                url: 'http://localhost:3000/login'
            }
            await auth.sendPasswordResetEmail(email, config)
                .then(()=>{
                    props.history.push('/login')
                })
                .catch(() => {
                    const err = ['Email not found.']
                    setErrors(err)
                })
        }catch(error){
            // console.log(error)
        }
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