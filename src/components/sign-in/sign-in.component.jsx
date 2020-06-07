import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })

    }

    render() {
        return (
            <div className="sign-in">
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name='email' handleChange={this.handleChange} value={this.state.email} label='Email' required />
                    <FormInput type="password" handleChange={this.handleChange} name='password' value={this.state.password} label='Password' required />
                    <div className="buttons">
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>

                </form>

            </div >
        )
    }

}

export default SignIn;