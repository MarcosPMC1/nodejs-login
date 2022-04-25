import "./login.css";
import { CardRegister } from "../../components/CardRegister/CardRegister";
import { CardLogin } from "../../components/CardLogin/CardLogin";
import { React, useState } from 'react'

export function Login() {
    const [state, setState] = useState(false);

    const toggle = () => {
        setState(!state);
    }


    return(
        <section id='login'>
            <button onClick={toggle} className='btn__toggle'>{state ? 'Login' : 'Cadastrar'}</button>
            {state ? <label></label> : <label></label>}
            {state ? <CardLogin /> : <CardRegister /> }    
        </section>
 
    );
}