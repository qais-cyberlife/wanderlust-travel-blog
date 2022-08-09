import { Link } from "react-router-dom"
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from '../mutations/userMutation';
import {useNavigate} from 'react-router-dom';

import "../styles/login.css"

export default function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [login] = useMutation(LOGIN_USER);

    const onSubmit = async (e) => {
        e.preventDefault();
        
        if ( username === '' || password === '') {
            return alert('Please fill in all fields!');
        }

        // addUser(name, username, password);
        const data = await login({variables: {username, password}});
        console.log("login result", data);

        if( data.data.login == null ) {
            alert("Login failed");
            return;
        }

        setUsername('');
        setPassword('');

        // save it on local storage
        localStorage.setItem("login", JSON.stringify(data.data.login));

        alert('Login successfully');
        navigate('/');
    };
    return (
        <>
            <div class="login">
                <form onSubmit={onSubmit} class="loginForm">
                    <span class="loginTitle">Login</span>
                    <label class="loginLabel">Username</label>
                    <input class="loginInput" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label class="loginLabel">Password</label>
                    <input class="loginInput" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button class="loginButton">Login</button>
                </form>
                <button class="loginRegisterButton"><Link class="link" to='/register'>Register</Link></button>
            </div>
        </>
    )
}