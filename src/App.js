import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./poges/Home";
import {About} from "./poges/About";
import {Blog} from "./poges/Blog";
import "./App.css";
import {Layout} from "./components/layout/Layout";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path={'*'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/blog'} element={<Blog/>}/>
            </Route>
        </Routes>
    );
}

export default App;