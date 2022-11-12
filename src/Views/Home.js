import React from "react";
import "../home.css";
import calorie from "../assets/calorie-counter.png"

function Home() {
  return (
    <div className="section-header">
      <section className="banner">
        <div className="banner-view">
          <p>Bienvenue dans une seine vie</p>
        </div>
      </section>

      <section className="section-profil">
        <div className="section-left">
          <div className="bloc-left">
            <h2>Salut gauche</h2>
            <p>Présentation gauche</p>
          </div>
        </div>
        <div className="section-right">
          <div className="bloc-left">
            <h2>Salut droite</h2>
            <p>Présentation droite</p>
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="container-card">
          <img src={calorie}alt=""/>
          <h2 class="card-title">Lion</h2>
        </div>

        <div className="container-card">
          <img src={calorie}alt=""/>
          <h2 class="card-title">Lion</h2>
        </div>

        <div className="container-card">
          <img src={calorie}alt=""/>
          <h2 class="card-title">Lion</h2>
        </div>

        <div className="container-card">
          <img src={calorie}alt=""/>
          <h2 class="card-title">Lion</h2>
        </div>
      </section>
    
    <section className="section-signup">
        <button className="btn-signup">Inscription</button>
    </section>


    </div>
  );
}

export default Home;
