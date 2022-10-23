import React from 'react'
import { useState, useEffect } from 'react'

function StatsApp() {

  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:8009/info')
      const json = await data.json()
      console.log(json)
      setRooms(json)
    }
    fetchData()
  }, [])
  return (
    <div>
      StatsApp
      {
        rooms.map((rooms) => (
          <h2 key={rooms._id}>bmi : {rooms.bmi}</h2>
        ))
      }
    </div>
  )
}

export default StatsApp

