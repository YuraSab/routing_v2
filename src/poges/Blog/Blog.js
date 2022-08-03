import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import styles from "./Blog.module.css";

const Blog = () => {


    const [posts, setPosts] = useState([]);
    const [postsOnPage, setPostsOnPage] = useState([]);
    const [page, setPage] = useState(1);



    const fetchData = async() => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const json = await response.json();
        setPosts(json);
        const onPage = await json.filter(el => el.id <= (page*20));
        // .then(value => setPostsOnPage(value))
        setPostsOnPage(onPage);
    }

    useEffect(() => {
       fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])





    const nextPage = () => {
        setPage(prevState => prevState+1)
    }
    const prevPage = () => {
        setPage(prevState => prevState-1)
    }

    return (
        <div style={{minHeight: 560}}>
            <h1>Blogs:</h1>
            {
                postsOnPage.map(post => (
                    <Link
                        to={`/blog/${post.id}`}
                        key={post.id}
                        className={styles.blogsLinks}
                    >
                        <h3>{post.title}</h3>
                    </Link>
                ))
            }

            <button onClick={prevPage} disabled={page <= 1}>
                prev
            </button>
            <button onClick={nextPage} disabled={page >= posts.length}>
                next
            </button>
        </div>
    )
}

export {Blog}