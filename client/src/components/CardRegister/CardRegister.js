import React, { useState } from "react";
import Axios from "axios";

export function CardRegister() {
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
        <div className="container__form">
            <label htmlFor="user">Nome de Usaurio:</label>
            <input 
                type="text"
                name="user"
                placeholder="User"
                className="input__register"
                onChange={haddleChangeValues}
                required
            />
            <label htmlFor="password">Senha:</label>
            <input 
                type="password"
                name="password"
                placeholder="Senha"
                className="input__register"
                onChange={haddleChangeValues}
                required
            />
            <label htmlFor="email">Email:</label>
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
    );
}