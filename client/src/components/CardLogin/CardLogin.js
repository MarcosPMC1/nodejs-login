import React, { useState } from "react";
import Axios from "axios";

export function CardLogin() {
    const [values, SetValues] = useState();
    
    const haddleChangeValues = (value) => {
        SetValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const handdleClickButton = () => {
        Axios.post("http://localhost:3001/login", {
            password: values.password,
            email: values.email,
        }).then((response) => {
            console.log(response);
        });
    };

    return(
        <div className="container__form">
            <label htmlFor="email">E-mail</label>
            <input 
                type="email"
                name="email"
                placeholder="E-mail"
                className="input__login"
                onChange={haddleChangeValues}
                required
            />
            <label htmlFor="password">Senha</label>
            <input 
                type="password"
                name="password"
                placeholder="Senha"
                className="input__login"
                onChange={haddleChangeValues}
                required
            />
            <button className="btn__login" onClick={handdleClickButton}>Entrar</button>
        </div>
    );
}