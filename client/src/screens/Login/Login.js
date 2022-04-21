import React, { useState } from "react";

export function Login() {
    const [values, SetValues] = useState();
    
    const haddleChangeValues = (value) => {
        SetValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const handdleClickButton = () => {
        console.log(values);
    };
    return(
        <section id='login'>
            <h1>login</h1>
            <div>
                <input 
                    type="text"
                    name="name"
                    placeholder="Nome"
                    className="input__register"
                    onChange={haddleChangeValues}
                />
                <input 
                    type="text"
                    name="preco"
                    placeholder="Preço"
                    className="input__register"
                    onChange={haddleChangeValues}
                />
                <input 
                    type="text"
                    name="categoria"
                    placeholder="Categoria"
                    className="input__register"
                    onChange={haddleChangeValues}
                />
                <button className="btn__register" onClick={handdleClickButton}>Cadastrar</button>
            </div>
        </section>
 
    );
}