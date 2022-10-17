import React, { useContext , useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './Login.css'

const Login = () => {

    const {loginUser,setUser} = useContext(AuthContext);
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLoginBtn=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6 ){
            setError("Password length must be 6 or more than 6 Characters!!");
            return;
        }

        loginUser(email,password)
        .then(result=>{
            const user = result.user;
            setUser(user)
            console.log(user);
            navigate(from,{replace : true})
            console.log('login successfull');
        })
        .catch(error=>{
            console.error(error);
        })

        form.reset();
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Login 😀😀</h1>
            <form onSubmit={handleLoginBtn}>
                <div className='form-control'> 
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' placeholder="email" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' placeholder="password" required/>
                </div>
                <button className='btn-submit'>Login</button>
                <p>{error}</p>
                <p>New to Ema-john? <Link to='/signup'>Sign Up</Link></p>
            </form>
        </div>
    );
};

export default Login;