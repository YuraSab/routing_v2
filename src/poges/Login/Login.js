import React from 'react';
import {useLocation, useNavigate} from "react-router";
import {useAuth} from "../../hook/UseAuth";

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';
    const {signIn} = useAuth();


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;

        signIn(user, () => navigate(fromPage, {replace: true}));
    }


    return (
        <div style={{minHeight: 599}}>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name={'username'}/>
                </label>
                <button type={'submit'}>Login</button>
            </form>
        </div>
    )
}

export {Login}