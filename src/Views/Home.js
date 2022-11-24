import React from "react";
import "../home.css";
import calorie from "../assets/calorie-counter.png"
import {useContext} from 'react'
import {User} from '../App'
import {NavLink} from 'react-router-dom'

function Home() {
    const context = useContext(User)

  return (
    <div className="section-header">
      <section className="banner">
        <div className="banner-view">
          <p>Bienvenue dans une vie seine</p>
          <span>{context.Log ? <p>{context.user.firstname} {context.user.surname}</p> : null}</span> 
        </div>
      </section>

      <section className="section-profil">
        <div className="section-left">
          <div className="bloc-left">
            <h2>Bonjour a toi</h2>
          <p>Ce projet est mis en place afin de mettre en valeur mon site  « IMC » grâce à ce site d’information. Il permet aux différents clients de pouvoir avoir plusieurs informations sur leurs corps, pouvoir calculer leurs IMC, leur total calories et leur poids idéal et pouvoir s’informer davantage, pour évoluer à l'avenir et atteindre leurs objectifs.</p>
          </div>
        </div>
        <div className="section-right">
          <div className="bloc-left">
            <p>Une page plein de ‘information ? Oui c’est bien ça </p>
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="container-card">
          <img src={calorie}alt=""/>
          <h2 class="card-title">Calculateur</h2>
        </div>

        <div className="container-card">
          <img src={calorie}alt=""/>
          <h2 class="card-title">Sport</h2>
        </div>

        <div className="container-card">
          <img src={calorie}alt=""/>
          <h2 class="card-title">Nutrition</h2>
        </div>

        <div className="container-card">
          <img src={calorie}alt=""/>
          <h2 class="card-title">Calculateur</h2>
        </div>
      </section>
    
    <section className="section-signup">
      {!context.Log?
        <NavLink to='/signup'><button className="btn-signup">Inscription</button></NavLink>
        :null}
    </section>


    </div>
  );
}

export default Home;
