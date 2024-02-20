import React, { useState } from "react";
import './CSS/LoginSignup.css';
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from 'axios';

const Signup = () => {
    const[values, setValues] = useState({
        name:'',
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const[errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev =>({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.password === "" ){
            axios.post('http://localhost:8081/signup',values)
            .then(res => {
                    navigate('/login');
            })
            .catch(err => console.log(err));
        }
    }
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <form action="" onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className="loginsignup-fields">
                        <input type="text" placeholder="Your Name" name="name" onChange={handleInput} />
                        {errors.name && <span className="error">{errors.name}</span>}
                        <input type="email" placeholder="Email Address" name="email" onChange={handleInput} />
                        <input type="password" placeholder="Password" name="password" onChange={handleInput} />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <button type="submit">Continue</button>
                    <p className="loginsignup-login">Already have an account? <Link to = '/login' className="loginsignup-login-Link">Login here</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Signup;
