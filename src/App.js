import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./poges/Home/Home";
import {About} from "./poges/About/About";
import {Blog} from "./poges/Blog/Blog";
import "./App.css";
import {Layout} from "./components/layout/Layout";
import {BlogSinglePage} from "./poges/Blog/BlogSinglePage";
import {BlogEdit} from "./poges/Blog/BlogEdit";
import {BlogNew} from "./poges/Blog/BlogNew";
import {NotFound} from "./poges/NotFound/NotFound";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path={'*'} element={<NotFound/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/blog'} element={<Blog/>}/>
                <Route path={'/blog/:id'} element={<BlogSinglePage/>}/>
                <Route path={'/blog/:id/edit'} element={<BlogEdit/>}/>
                <Route path={'/blog/new'} element={<BlogNew/>}/>
            </Route>
        </Routes>
    );
}

export default App;