/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Aside.css';
import userLogo from './../../assets/img/user-icon.svg';
import ButtonHeader from '../button-aside/Button';
import DashboardLogo from './../../assets/icons/dashboard.svg';
import GraphLogo from './../../assets/icons/graph.svg';
import UserLogo from './../../assets/icons/user.svg';
import Coin from './../../assets/icons/coin.svg';
import Invoice from './../../assets/icons/invoice.svg';
import Support from './../../assets/icons/support.svg';
import { Link } from 'react-router-dom'

const Menu = props => { 
    return (
        <aside>
            <div className="logo-container">
                <img src={userLogo}  alt="icon"/>
                <h2>Bem vindo, {props.username}</h2>
                <h3>Conta: <span className="account-type">{props.accountType}</span></h3>
            </div>
            <div className="menu">
                <Link to="/home">
                    <ButtonHeader icon={GraphLogo} text={'Dashboard'}/>
                </Link>
                <div className="line"></div>

                <Link to="/graph">
                    <ButtonHeader icon={DashboardLogo} text={'Gráficos'}/>
                </Link>
                <div className="line"></div>

                <Link to="/user">
                    <ButtonHeader icon={UserLogo} text={'Usuário'}/>
                </Link>
                <div className="line"></div>

                <ButtonHeader icon={Coin} text={'Créditos'}/>
                <div className="line"></div>

                <ButtonHeader icon={Invoice} text={'Fatura'}/>
                <div className="line"></div>
                
                <Link to="/support">
                    <ButtonHeader icon={Support} text={'Suporte'}/>
                </Link>
                <div className="line"></div>
            </div>
        </aside>
    )
}

export default Menu;