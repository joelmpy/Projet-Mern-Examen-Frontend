import React from "react";
import moment from "moment";
import "./CradProgres.css";


function CardProgres({ room }) {


  const getDate = (date) => {
    return moment(date).format("DD/MM/YYYY");
  };

  return (
      <>
    <div class="products-row">
        <div class="product-cell category">{getDate(room.Dateofday)}</div>
        <div class="product-cell category">{room.gender}</div>
        <div class="product-cell category">{room.age}</div>
        <div class="product-cell sales">{room.height}</div>
        <div class="product-cell stock">{room.weight}</div>
      </div>
      </>


  );
}

// <div style={{ width: "400px", margin: "1rem", display : "flex" }}>

//       <p>Date : {getDate(room.Dateofday)}</p>
//       <p>AGE : {room.age}</p>
//       <p>Genre : {room.gender}</p>
//       <p>Taille: {room.height}cm</p>
//       <p>Poids : {room.weight}kg</p>
//       <p>Votre total Calorie est : {room.totalCalories}</p>
//       <p>Votre BMI est : {room.bmi}</p>

// </div>

export default CardProgres;
