import React, {Suspense, useContext, useState} from 'react';
import Counter from "./components/Counter";
import './styles/index.scss'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContent} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
    const{theme,toggleTheme} = useTheme();
    return (
        <div className={classNames('app',{},[theme])}>
            <BrowserRouter>
                <button onClick={toggleTheme}>TOGGLE</button>
                <NavLink to={'/'}>Main</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <Suspense>
                    <Routes>
                            <Route path={'/about'} element={<AboutPageAsync/>}></Route>
                            <Route path={'/'} element={<MainPageAsync/>}></Route>
                    </Routes>
                </Suspense>

            </BrowserRouter>
        </div>
    );
};

export default App;
