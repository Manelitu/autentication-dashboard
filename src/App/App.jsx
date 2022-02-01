import React from "react";
import { Routes, Route } from 'react-router-dom';

import Login from './../../src/pages/login/login';
import SunneLogo from './../components/sunne-logo/sunneLogo';
import Home from '../pages/home-page/Home';
import Signup from '../pages/signup/Signup';
import Aside from '../../src/components/aside/Aside';
import Header from '../../src/components/header/Header';
import UserPage from "../pages/user-page/UserPage";

const main = () => {
    return (
           <React.Fragment>    
                <div>
                    <Routes>
                        <Route 
                        exact path="/" 
                        element={[<SunneLogo />, <Login />]}/>

                        <Route 
                        path="/signup"
                        element={[<SunneLogo />, <Signup />]}/>

                        <Route 
                        path="/home" 
                        element={[<Header />, <Aside username="User" accountType="Premium"/>, <Home />]}/>

                        <Route 
                        path="/user" 
                        element={[<Header />, <Aside username="User" accountType="Premium"/>, <UserPage />]}/>

                        <Route 
                        path="/graph" 
                        element={[<Header />, <Aside username="User" accountType="Premium"/>, <>Graph</>]}/>
                    </Routes> 
                </div>
           </React.Fragment>
    )
}

export default main;