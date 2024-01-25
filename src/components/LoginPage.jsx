import React, { useState } from 'react';
import { login } from '../service/api';
import { useNavigate } from 'react-router-dom';
import Store from './images/provision-shop-designing-500x500.webp'
import CryptoJS from 'crypto-js';
import './login.css'

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const validateEmail = () => {
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const validatePassword = () => {
        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
      };
      const hashPassword = (password) => {
        // Use crypto-js to hash the password using SHA256
        return CryptoJS.SHA256(password).toString();
      };
    
      const handleLogin = async () => {
        let hashedPassword = ''
        // Validate email
        if (!validateEmail()) {
          setEmailError('Invalid email format');
          return;
        } else {
            setEmailError('');
        }
    
        // Validate password
        if (!validatePassword()) {
          setPasswordError('Invalid password format');
          return;
        } else{
            hashedPassword = hashPassword(password);
            setPasswordError('')
        }
    
        // Clear any previous error messages
        setEmailError('');
        setPasswordError('');
    try {
      const accessToken = await login(email, hashedPassword);
    //   onLogin(accessToken); //please uncomment when we get access token  
    // navigate('/products');  //please uncomment when we get access token
    } catch (error) {
        console.error('Login failed:', error);
    }
    onLogin(''); // please comment when we get access token
    navigate('/products'); // please comment when we get access token
  };

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', margin:'50px 200px 0 0', justifyContent: 'space-around'}}>
        <div>
            <img src={Store} alt="" />
        </div>
        <div  className='login_page'>
            <h2>Login</h2>
            <form>
                {/* Email input with validation */}
                <div className='username'>
                    <label style={{width: '85px'}}>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                </div>
                {/* Password input with validation */}
                <div className='password'>
                    <label style={{width: '85px'}}>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                </div>
                {/* Login button */}
                <div className='login'>
                    <button type="button" onClick={handleLogin} className='login-button'>
                    Login
                    </button>
                </div>
                {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
            </form>
      </div>
    </div>
  );
};

export default LoginPage;
