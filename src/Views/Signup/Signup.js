import React from 'react'
import '../Login/Login.css'
import { useForm } from "react-hook-form";
import {useState} from "react"



function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    

    const [values, setValues] = useState(null)
    
    const onSubmit = (values, event) => {
        event.preventDefault();
        console.log(values)
        fetch('http://localhost:8009/signup', {
             headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json'
               },
               
               method: 'POST',
               body: JSON.stringify({
                firstname : values.firstname,
                surname : values.surname,
                email : values.email,
                password : values.password,
                aboutMe : "Salut je suis la pour perdre du poids"
               })
             })
             .then(reponse => reponse.json())
             .then(res => { console.log('Succes', res)
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
              <h3>S'inscrire</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
    
              <input {...register('firstname', { required: true, maxLength: 15 })} placeholder="firstname" onChange={handleChange} />
              <span> {errors.firstname?.type ==='required' && "Entrez votre nom d'utilisateur"} </span>
              <span> {errors.firstname?.type ==='maxLength' && "Attention! 15 caractère max"} </span>

              <input {...register('surname', { required: true, maxLength: 15 })} placeholder="surname" onChange={handleChange}/>
              <span> {errors.surname?.type ==='required' && "Entrez votre nom d'utilisateur"} </span>
              <span> {errors.surname?.type ==='maxLength' && "Attention! 15 caractère max"} </span>

              <input {...register('email', { required: true, maxLength: 30 })} placeholder="email" onChange={handleChange} />
              <span> {errors.email?.type ==='required' && "Entrez votre nom d'utilisateur"} </span>
              <span> {errors.email?.type ==='maxLength' && "Attention! 15 caractère max"} </span>
    
              <input {...register('password', { required: true, minLength: 6 })} placeholder="Password" onChange={handleChange} />
              <span className=''> {errors.Password?.type ==='required' && "Entrez votre mot de passe"} </span>
              <span> {errors.Password?.type ==='minLength' && "Entrez 6 caractère min."} </span>
    
              <div className='button-submit'>
                <button type="submit" className="bouton-ok">S'inscrire</button>
              </div>
            </form>
            
            <p>Vous avez perdu votre mot de passe ? <span>Mot de passe oublié</span></p>
          </div>
        </div>
      )
}

export default Signup