import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import CardProgres from '../CardProgres/CardProgres'
import {useContext} from 'react'
import {User} from '../../App'

function StatsApp() {

  const [rooms, setRooms] = useState([])
  const context = useContext(User)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:8009/infos/${context.user._id}`)
      console.log(data)
      const json = await data.json()
      console.log(json)
    
      setRooms(json)
    }
    fetchData()
  }, [])

  return (
          <div class="products-area-wrapper tableView">

      <div class="products-header">
        <div class="product-cell image">Date</div>
        <div class="product-cell category">Gender</div>
        <div class="product-cell status-cell">Age</div>
        <div class="product-cell sales">Height</div>
        <div class="product-cell stock">Weight</div>
      </div>
      {rooms.map((rooms) => (
          <Link key={rooms._id} to={rooms._id}>
            <CardProgres room={rooms}/>
          </Link>
          
        ))
      }
    </div>
  )
}

export default StatsApp

