import React from 'react'
import './Login.css'
import { useForm } from "react-hook-form";
import {useContext} from 'react'
import { User } from "../../App"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm()
    const context = useContext(User)
  const [values, setValues] = useState(null)
  const navigate = useNavigate()
    
  const onSubmit = (values, event) => {
      event.preventDefault();
      console.log(values)
      fetch('http://localhost:8009/login', {
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
             },
             
             method: 'POST',
             body: JSON.stringify({
              email : values.email,
              password : values.password,
             })
           })
           .then(reponse => reponse.json())
           .then(res => { 
            context.setAuth(true, res)
            navigate("/", {replace : true})
            console.log(res)
           }
           ) 
          
    };


    const handleChange = (event) => {
      setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

  return (
    <div class="login-section">
      <div className="login-form">
        <div className="login-top">
          <h3>Connexion</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">

        <input {...register('email', { required: true, maxLength: 30 })} type="email" placeholder="email" onChange={handleChange} />
              <span> {errors.email?.type ==='required' && "Entrez votre nom d'utilisateur"} </span>
              <span> {errors.email?.type ==='maxLength' && "Attention! 15 caractère max"} </span>
    
              <input {...register('password', { required: true, minLength: 6 })} type="password" placeholder="Password" onChange={handleChange} />
              <span className=''> {errors.password?.type ==='required' && "Entrez votre mot de passe"} </span>
              <span> {errors.password?.type ==='minLength' && "Entrez 6 caractère min."} </span>
    
          <div className='button-submit'>
          <button type="submit" className="bouton-ok">Se Connecter</button>

          </div>
        </form>
        
        <p>Vous avez perdu votre mot de passe ? <span>Mot de passe oublié</span></p>
      </div>
    </div>
  )
}

export default Login