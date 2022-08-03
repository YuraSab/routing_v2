import React from 'react';
import {useAuth} from "../../hook/UseAuth";
import {useNavigate} from "react-router";

const BlogNew = () => {

    const {signOut} = useAuth();

    const navigate = useNavigate();


    return (
        <div style={{minHeight: 599}}>
            <h1>Create post</h1>
            <button onClick={() => signOut(() => navigate('/', {replace: true}))}>Log out</button>
        </div>
    )
}

export {BlogNew}