import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './login.css';
import Sunne from './../../assets/img/sunne-logo.png';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const linkStyle = {
        width: '0'
    };

    const stateHandle = () => email.length === 0 || password.length === 0;

        return (

        <section className="autentication">
            <div className="background-user-image"></div>
            <img className="user-image" src={Sunne} alt="the company"></img>
            <h2 className="login-title">Log in</h2>

            <div className="form-area">
                <form>
                    <label for="name">Email: </label>
                    <input 
                        className="user-form user" 
                        type="text" 
                        name="email" 
                        id="name" 
                        required
                        autoFocus 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="off" 
                        placeholder="Digite seu email"/>

                    <label for="password">Senha: </label>
                    <input 
                        className="user-form password" 
                        type="password" 
                        name="user" 
                        id="password" 
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Digite sua senha"></input>
                        
                    <Link to="/home" style={linkStyle}>
                            <button
                                className="button" 
                                type="submit" 
                                value="Login"
                                disabled={stateHandle()}> Login
                            </button>
                    </Link>
                </form>
            </div>

            <div className="help-area">
                <Link to="/forgot-password">Esqueceu sua senha?</Link>
                <Link to="sign-up">Ainda não possui uma conta?</Link>
            </div>

        </section>

        )
    }

export default Login;