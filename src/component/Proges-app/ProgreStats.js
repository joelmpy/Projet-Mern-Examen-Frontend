import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import CardForm from '../CardForm/CardForm'

function ProgreStats() {

  const [room, setRoom] = useState(null)
  const {id} = useParams()
  console.log(id)
  
  useEffect(() => {

    fetchData()
  }, [id])

  const fetchData = async () => {
    const data = await window.fetch(`http://localhost:8009/info/${id}`)
     const jSon = await data.json()
     setRoom(jSon)
 }
  return room ? (
    <div>
      <h2 style={{textAlign : "center", marginTop : "10px"}}>Editer informations déjà validées</h2>
      <CardForm id={id} room={room} setRoom={setRoom} refresh={fetchData}/>
    </div>
  ) : <p>Error sur la page</p>
}

export default ProgreStats