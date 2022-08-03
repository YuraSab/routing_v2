import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {Home} from "./poges/Home";
import {About} from "./poges/About";
import {Blog} from "./poges/Blog";
import "./App.css";

function App() {

    return (
        <div className={'mainDiv'}>
            <header>
                <Link className={'link'} to={'/'}>
                    <div className={'linkDiv'}>
                        Home
                    </div>
                </Link>
                <Link className={'link'} to={'/about'}>
                    <div className={'linkDiv'}>
                        About
                    </div>
                </Link>
                <Link className={'link'} to={'/blog'}>
                    <div className={'linkDiv'}>
                        Blog
                    </div>
                </Link>
            </header>
            <main>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/blog'} element={<Blog/>}/>
                    <Route path={'*'} element={<Home/>}/>
                </Routes>
            </main>
            <footer>
                Footer
            </footer>
        </div>
    );
}

export default App;