import React from "react";
import { Link } from 'react-router-dom';
import './login.css';
import Sunne from './../../assets/img/sunne-logo.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from "../../assets/utils/schema";

const Login = (props) => {

    const onSubmit = (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    const linkStyle = {
        width: '0'
    };

    return (

        <section className="autentication">
            <div className="background-user-image"></div>
            <img className="user-image" src={Sunne} alt="the company"></img>
            <h2 className="login-title">Log in</h2>

            <div className="form-area">
                <Formik
                    onSubmit={onSubmit}
                    validationSchema={schema}
                    initialValues={{
                        email: '',
                        password: '',
                        
                    }}>
                   {({ isValid }) => (
                        <Form>
                            <label for="name">Email: </label>
                            <Field 
                                name="email"
                                className="user-form user" 
                                type="text" 
                                id="name" 
                                autoFocus
                                autoComplete="off" 
                                placeholder="Digite seu email"/>
                            <ErrorMessage name="email" component='div'/>

                            <label for="password">Senha: </label>
                            <Field 
                                className="user-form password" 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Digite sua senha"></Field>
                            <ErrorMessage name="password" component='div'/>
                                
                            <Link to="/home" style={linkStyle}>
                                    <button
                                        className='button' 
                                        type="submit"
                                        disabled={!isValid}> Login
                                    </button>
                            </Link>
                        </Form>
                   )}
                    
                </Formik>
            </div>

            <div className="help-area">
                <Link to="/forgot-password">Esqueceu sua senha?</Link>
                <Link to="signup">Ainda não possui uma conta?</Link>
            </div>

        </section>

        )
    }

export default Login;