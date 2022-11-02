import React from 'react'
import "./CardForm.css"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router'
import {useContext} from 'react'
import {User} from '../../App'


function CardForm({ id, room, setRoom, refresh }) {
    const context = useContext(User)
    console.log(context)
    const [values, setValues] = useState(null)
    const [weight, setWeight] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        setValues(room)
    }, [room, id])

    const onFinsih = (values) => {
        console.log(values)
        const info ={
            weight,
            height:context.user.height,
            gender:context.user.gender,
            age:context.user.age,
            activity:context.user.activity
        }
        console.log(info)
        fetch(`http://localhost:8009/info/${id}`, {
            headers : {
                "Content-type" : "application/json",
            }, 
            method: 'PATCH',
            body : JSON.stringify(info)
        })
        .then((res) => {
            if(res.ok) {
                console.log('HTTP REQUEST SUCCES')
                refresh()
            } else {
                console.log('Http request UNSUCCES')
            }
            return res
        })
        // .then((res) => res.json())
        // .then((data) => setRoom(values))
        // .catch((error) => console.log(error))
    }

    const handleDelte = () => {
       fetch(`http://localhost:8009/info/${id}`, {
            method: 'DELETE', 
        }).then((res) => {
            if(res.ok) {
                console.log('HTTP REQUEST SUCCES')
            } else {
                console.log('Http request UNSUCCES')
            }
            return res
        })
        navigate('/Progres')
    }

    // const handleChange = event => {
    //     const { value, name } = event.target
    //     setValues({ ...values, [name]: value })
    // }

    const handleWeight = (e) => {
        setWeight(e.target.value)
    }

 





    return (
        <>
            <div className="container">
           

                    <div className="card">
                        <div className="card__image">
                            <p>{room.weight}</p>
                        </div>
                        <p className="card__name">Poids</p>
                        <div className="grid-container"></div>
                        <button className="btn draw-border">EN SAVOIR PLUS</button>
                        <input type="number" onChange={handleWeight} name="name"  />
                    </div>

                    <div className="card">
                        <div className="card__image">
                            <p>{room.totalCalories}</p>
                        </div>
                        <p className="card__name">Total Calories</p>
                        <div className="grid-container"></div>
                        <button className="btn draw-border">EN SAVOIR PLUS</button>
                    </div>


                    <div className="card">
                        <div className="card__image">
                            <p>{room.bmi}</p>
                        </div>
                        <p className="card__name">BMI</p>
                        <div className="grid-container"></div>
                        <button className="btn draw-border">EN SAVOIR PLUS</button>
                    </div>

                    <div className="card">
                        <div className="card__image">
                            <p>{room.idealWeight}</p>
                        </div>
                        <p className="card__name">Poids Idéal</p>
                        <div className="grid-container"></div>
                        <button className="btn draw-border">EN SAVOIR PLUS</button>
                    </div>

            
                <div className='button'>
                <button type="submit" onClick={onFinsih} className='btn-change'>Submit</button>
                <button className="btn-change" onClick={handleDelte}>Supprimer</button>
                </div>

            </div>

        </>
    )
}

export default CardForm