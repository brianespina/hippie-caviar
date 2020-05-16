import React from 'react'
import './styles.scss'
import Button from './../../components/forms/Button'
import { signInWithGoogle } from './../../firebase/utils'


function Signin(props){
    const handleSubmit = event =>{
        event.preventDefault()
    }
    return(
        <div className="signin">
            <div className="wrap">
                <h2>Login</h2>

                <div className="formwrap">
                    <form onSubmit={handleSubmit}>
                        <div className="socialSignin">
                            <Button onClick={signInWithGoogle}>
                                Sign In with Google
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin