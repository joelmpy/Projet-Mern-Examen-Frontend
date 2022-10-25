import React from 'react'
import moment from 'moment';
import { Card, Badge } from 'antd'
const { Meta } = Card


function CardProgres({ room }) {

  const getDate = (date) => {
    return moment(date).format('DD/MM/YYYY');
  };

  return (

    <div style={{ width: "400px", margin: "1rem", display : "flex" }}>
      <Badge>
        <Card>
          <p>Date : {getDate(room.Dateofday)}</p>
          <p>AGE : {room.age}</p>
          <p>Genre : {room.gender}</p>
          <p>Taille: {room.height}cm</p>
          <p>Poids : {room.weight}kg</p>
          <p>Votre total Calorie est : {room.totalCalories}</p>
          <p>Votre BMI est : {room.bmi}</p>
        </Card>
      </Badge>

    </div>




  )
}

export default CardProgres