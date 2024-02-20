import React, { useState, useEffect } from 'react';
import './CSS/LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

const Login = ({ setIsLoggedIn }) => {
  const [values, setValues] = useState({
    name: '',
    password: ''
  });
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedInLocal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleLoginSuccess = () => {
    setIsLoggedInLocal(true);
    setIsLoggedIn(true); // Use the prop to update App state
  };

  useEffect(() => {
    if (isLoggedIn) {
      console.log('is logged in ', isLoggedIn);
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form inputs
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    // Check if there are any validation errors
    if (Object.values(validationErrors).every((error) => error === '')) {
      try {
        // Make the login request
        const res = await axios.post('http://localhost:8081/login', values);

        if (res.data === 'Success') {
          handleLoginSuccess();
        } else {
          alert('No record existed. Register here');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <form action="" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder="Your Name" onChange={handleInput} name="name" />
            {errors.name && <span className="error">{errors.name}</span>}
            <input type="password" placeholder="Password" onChange={handleInput} name="password" />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <button type="submit">Continue</button>
          <p className="loginsignup-login">
            Don't have an account? <Link to="/signup" className="loginsignup-login-Link">Signup here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
