import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './SignUp.css'

const Signup = () => {

    const {signUpNewUser,setUser} = useContext(AuthContext)
    const [error,setError] = useState('');

    const handleSignUpSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value

        if(password.length < 6 ){
            setError("Password length must be 6 or more than 6 Characters!!");
            return;
        }
        if(password !== confirm){
            setError("Enter same password in confirm password field!!!");
            return;
        }

        signUpNewUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            console.log('user created')
        })
        .catch(error=>{
            console.error(error);
        })

        form.reset();
        console.log(email,password);
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up 😎😎</h1>
            <form onSubmit={handleSignUpSubmit}>
                <div className='form-control'> 
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' placeholder="email" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' placeholder="password" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input type="password" name='confirm' placeholder="confirm" required/>
                </div>
                <button className='btn-submit'>Sign Up</button>
                <p className='pass-error'>{error}</p>
                <p>Already a Ema-john user? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;