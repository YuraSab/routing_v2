import React from 'react';
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import styles from "./Blog.module.css";

const BlogSinglePage = () => {


    const {id} = useParams();
    const navigate = useNavigate();


    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(value => value.json())
            .then(value => setPost(value))
    }, [id])


    const back = '<<Back';

    return (
        <div style={{minHeight: 599}}>


            <div className={styles.buttonBack} onClick={() => navigate(-1)}>{back}</div>
            <h1>BlogSinglePage</h1>
            {
                post && (
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                )
            }
        </div>
    )
}

export {BlogSinglePage}