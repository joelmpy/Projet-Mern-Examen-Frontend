import React from 'react'
import "./CardForm.css"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { User } from '../../App'




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
        const info = {
            weight: weight,
            height: room.height,
            gender: room.gender,
            age: room.age,
            activity: room.activity,
        }
        fetch(`http://localhost:8009/info/${id}`, {
            headers: {
                "Content-type": "application/json",
            },
            method: 'PATCH',
            body: JSON.stringify(info)
        })
            .then((res) => {
                if (res.ok) {
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
            if (res.ok) {
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
            <div className="container-form">
                <div className="container_cards">
                    <div className="card_form">
                        <div className="grid-container">
                            <div className="card_title">
                                <p>{room.totalCalories}</p>
                            </div>
                            <p className="card_name">Total Calories</p>
                            <Link to="/BMI"><button className="btn-draw-border">EN SAVOIR PLUS</button></Link>
                        </div>
                    </div>


                    <div className="card_form">
                        <div className="grid-container">
                            <div className="card_title">
                                <p>{room.bmi}</p>
                            </div>
                            <p className="card_name">BMI</p>
                            <Link to={`/BMI/${room.bmi}`}><button className="btn-draw-border">EN SAVOIR PLUS</button></Link>
                        </div>
                    </div>

                    <div className="card_form">
                        <div className="grid-container">
                            <div className="card_title">
                                <p>{room.idealWeight}</p>
                            </div>
                            <p className="card_name">Poids Idéal</p>
                            <button className="btn-draw-border">EN SAVOIR PLUS</button>
                        </div>
                    </div>
                </div>

                <div className="card_form_change">
                    <div className="grid-container-weight">
                        <div className="card_title">
                            <p>{room.weight}</p>
                        </div>
                        <p className="card_name">Pour modifier ton Poids : </p>
                        <input type="number" onChange={handleWeight} name="name" className='input-change' />
                    </div>
                </div>
                <div className='button_save'>
                    <button className="btn-change" style={{ backgroundColor: "red" }} onClick={handleDelte}>Supprimer</button>
                    <button type="submit" style={{ backgroundColor: "blue" }} onClick={onFinsih} className='btn-change'>Confirmer</button>
                </div>


            </div>

        </>
    )
}

export default CardForm