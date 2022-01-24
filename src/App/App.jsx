import React from "react";
import { Routes, Route } from 'react-router-dom';

import Login from './../../src/pages/login/login';
import SunneLogo from './../components/sunne-logo/sunneLogo';
import Home from './../pages/home-page/Home';

const main = () => {
    return (
           <React.Fragment>    
                <div>
                    <Routes>
                        <Route 
                        exact path="/" 
                        element={[<SunneLogo />, <Login/>]}/>
                        
                        <Route 
                        path="/home" 
                        element={<Home/>}/>
                    </Routes>  
                </div>
           </React.Fragment>
    )
}

export default main;