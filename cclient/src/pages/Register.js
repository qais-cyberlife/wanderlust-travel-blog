import "../styles/register.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from "@apollo/client";

import { ADD_USER } from "../mutations/userMutation";


export default function Register () {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const [addUser] = useMutation(ADD_USER, {
    //     variables: { name, username, password},
    //     update(cache, { data: { addUser } }) {
    //         console.log("addUser");

    //         // It's not reading line 17. Here is the error
    //         const { users } = cache.readQuery({ query: GET_USERS });

    //         cache.writeQuery({
    //             query: GET_USERS,
    //             data: { users: [...users, addUser] },
    //         });
    //     }
    // });

    const [addUser, {data, loading, error}] = useMutation(ADD_USER);

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (name === '' || username === '' || password === '') {
            return alert('Please fill in all fields!');
        }

        // addUser(name, username, password);
        addUser({variables: {name, username, password}});

        setName('');
        setUsername('');
        setPassword('');

        alert('User is created successfully');
    };


    return (
        <>
            <div class="register">
                <form onSubmit={onSubmit} class="registerForm">
                    <span class="registerTitle">Register</span>
                    <label class="registerLabel">Name</label>
                    <input id="name" value={name} onChange={(e) => setName(e.target.value)} class="registerInput" type="text" placeholder="Name"/>
                    <label class="registerLabel">Username</label>
                    <input id="username" value={username} onChange={(e) => setUsername(e.target.value)} class="registerInput" type="text" placeholder="Username"/>
                    <label class="registerLabel">Password</label>
                    <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} class="registerInput" type="password" placeholder="Password"/>
                    <button class="registerButton">Register</button>
                </form>
                <button class="registerLoginButton"><Link class="link" to='/login'>Login</Link></button>
            </div>
        </>
    )
}