import React from "react";
import './Home.css';
import Aside from '../../components/aside/Aside';
import Header from '../../components/header/Header';
import Main from './../../components/main/Main';

const Home = props => {
       return (
        <React.Fragment>
            <Header />
            <Aside username="User" accountType="Premium"/>
            <Main />
        </React.Fragment>
       )
}

export default Home;