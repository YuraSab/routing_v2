import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import styles from "./Blog.module.css";
import {BlogFilter} from "../../components/BlogFilter/BlogFilter";

const Blog = () => {


    const [posts, setPosts] = useState([]);
    const [postsOnPage, setPostsOnPage] = useState([]);
    const [page, setPage] = useState(1);

    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('post') || '';

    const latest = searchParams.has('latest');
    const startsFrom = latest ? 80 : 1;


    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const json = await response.json();
        setPosts(json);
        const onPage = await json.filter(el => el.id <= (page * 20) && el.id > (page === 1 ? 0 : page * 20 - 20));
        // .then(value => setPostsOnPage(value))
        setPostsOnPage(onPage);
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])


    const nextPage = () => {
        setPage(prevState => prevState + 1)
    }
    const prevPage = () => {
        setPage(prevState => prevState - 1)
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const query = form.search.value;
    //     // setSearchParams({post: query});
    //     const isLatest = form.latest.checked;
    //     const params = {};
    //
    //     if(query.length) params.post = query;
    //     if(isLatest) params.latest = true;
    //
    //     setSearchParams(params)
    // }


    // const pages = Math.max(posts.length/20);
    // const pages = Math.round(posts.length/20);
    const pages = Math.floor(posts.length / 20);

    return (
        <div style={{minHeight: 599}}>
            <h1>Blogs:</h1>


            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams}/>

            {/*<form onSubmit={handleSubmit} autoComplete={'off'}>*/}
            {/*    <input type={'search'} name={'search'}/>*/}
            {/*    <label style={{padding: '0 1rem'}}> New only*/}
            {/*        <input type={'checkbox'} name={'latest'}/>*/}
            {/*    </label>*/}
            {/*    <input type={'submit'} value={'Search'}/>*/}
            {/*</form>*/}

            <Link to={'/blog/new'}>Add new post</Link>
            {
                postsOnPage.filter(
                    post => post.title.includes(postQuery) && post.id >= startsFrom
                ).map(post => (
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
            <button onClick={nextPage} disabled={page >= pages}>
                next
            </button>
        </div>
    )
}

export {Blog}