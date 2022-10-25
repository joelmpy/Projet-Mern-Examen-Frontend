import React from 'react'
import {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import CardProgres from '../CardProgres/CardProgres'
import CardForm from '../CardForm/CardForm'

function ProgreStats() {

  const [room, setRoom] = useState(null)
  const {id} = useParams()
  
  useEffect(() => {
    const fetchData = async () => {
       const data = await fetch(`http://localhost:8009/info${id}`)
        const json = await data.json()
        setRoom(json)
    }
    fetchData()
  }, [id])

  return room ? (
    <div>
      <h1>ProgresStats</h1>
      <CardProgres room={room}/>
      <h2>Editer info deja valider</h2>
      <CardForm id={id} data={room} setRoom={setRoom}/>
    </div>
  ) : null 
}

export default ProgreStats