import React from 'react'
import './styles.scss'
import Button from './../../components/forms/Button'
import { signInWithGoogle } from './../../firebase/utils'

class Signin extends React.Component {

    async handleSubmit(event){
        event.preventDefault()
    }

    render(){
        return(
            <div className="signin">
                <div className="wrap">
                    <h2>Login</h2>
    
                    <div className="formwrap">
                        <form onSubmit={this.handleSubmit}>
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
    
}

export default Signin