import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInWithGooglePopup, createUserDocFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response)
            resetFormFields();
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password' :
                    alert('Incorrect password for email')
                    break;
                case 'auth/wrong-password' :
                    alert('User not found')
                    break;
                default : 
                    console.log('user connexion encountered an error: ',error)
            }
         
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    const signInWithGoogle = async () => {
        const { user} = await signInWithGooglePopup();
        await createUserDocFromAuth(user)
    }

    return (
        <div className="sign-in-container">
        <h2>Already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email}/>
            <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password}/>
            <div className="buttons-container">
                <Button type="submit" >Sign In</Button>
                <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google sign in</Button>
            </div>
        </form>
    </div>
    )
    
}

export default SignInForm