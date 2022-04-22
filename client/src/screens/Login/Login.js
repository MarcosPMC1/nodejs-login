import React, { useState } from "react";
import Axios from "axios";
import "./login.css";

export function Login() {
    const [values, SetValues] = useState();
    
    const haddleChangeValues = (value) => {
        SetValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const handdleClickButton = () => {
        Axios.post("http://localhost:3001/register", {
            user: values.user,
            password: values.password,
            email: values.email,
        }).then((response) => {
            console.log(response);
        });
    };

    return(
        <section id='login'>
            <h1>login</h1>
            <div className="container__login">
                <input 
                    type="text"
                    name="user"
                    placeholder="User"
                    className="input__register"
                    onChange={haddleChangeValues}
                    required
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="Senha"
                    className="input__register"
                    onChange={haddleChangeValues}
                    required
                />
                <input 
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="input__register"
                    onChange={haddleChangeValues}
                    required
                />
                <button className="btn__register" onClick={handdleClickButton}>Cadastrar</button>
            </div>
        </section>
 
    );
}