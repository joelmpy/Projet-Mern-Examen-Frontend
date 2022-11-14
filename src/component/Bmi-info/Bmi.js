import React from 'react'
import info from '../../data/bmi.json'
import { AiOutlineFastBackward } from "react-icons/ai";
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"
import "./bmi-info.css"
import {useState, useEffect} from "react"
import faible from "../../assets/faible.svg"
import normal from "../../assets/normal.svg"
import surpoids from "../../assets/surpoids.svg"


function Bmi() {

    const { bmi } = useParams()
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const [theme, setTheme] = useState({})
    // const imgSrc = ""
  

    useEffect(() => {
        let tableColor = []
        if (bmi < 18.5){
            setMessage('Tu es trop maigre')
            tableColor = ["white" , "#d9eef6"]
        }else if (19 <= bmi && bmi < 25) {
             setMessage ("Tu es Normal")
             tableColor = ["white" , "#e7ebd1"]
        } else if (25 <= bmi && bmi < 30) {
            setMessage("Tu es en surpoids")
            tableColor = ["white" , "##f9efc8"]
        } else if (30 <= bmi && bmi < 39.9){
            setMessage("Tu es obese")
        } else {
            setMessage("Tu es en Obesite morbite")
        }

       setTheme({
        color : tableColor[0],
        backgroundColor : tableColor[1]
    })
    }, [])

    let imgSrc;

    if (bmi < 18.5){
        imgSrc = faible
    }else if (19 <= bmi && bmi < 25) {
        imgSrc = normal
    } else if (25 <= bmi && bmi < 30) {
        imgSrc = surpoids
    } else if (30 <= bmi && bmi < 39.9){
        imgSrc = require("../../assets/Obese 1.jpg")
    } else {
        imgSrc = require("../../assets/Obese 2.jpg")
    }

    console.log(imgSrc)



    return (

        <div className='container-imc'>
            <div className="title-imc">
                <h1 className="section-imc">Le « BMI » (Body Mass Index)</h1>
            </div>
            <div className="icon">
                <AiOutlineFastBackward className="icon-btn" onClick={() => navigate(-1, { replace: true })} />
                <p onClick={() => navigate(-1, { replace: true })}>Retour a mes resultats</p>
            </div>
            {
                info.map((list, index) => (
                    <div key={index} className='container-bmi' style={theme} >
                        <p>{list.title} : </p>
                        <p className='result-bmi' >{bmi}</p>
                        <p>{message}</p>
                    </div>
                ))
            }
             <div className='img-container'>
          <img src={imgSrc} height = "100px" width = "300px" alt=''></img>
        </div>

            <h3 className='title-bmi'>Que signifie mon résultat ?</h3>
            <div className='section-info-result'>
            <p>Le résultat ainsi obtenu permet de <span>comparer son IMC à l'indice souhaitable pour être/rester en bonne santé.</span> On considère généralement que:</p>
                <ul className='bmi-item'>
                    <li className='bmi-items'>Un IMC entre 18,5 et 25 (kg/m²) est satisfaisant;</li>
                    <li className='bmi-items'>Si l'IMC est inférieur à 18,5, on est probablement trop maigre;</li>
                    <li className='bmi-items'>Si l'IMC se situe entre 25 et 30, on a probablement quelques kilos en trop;</li>
                    <li className='bmi-items'>Si l'IMC se situe entre 30 et 40, on est obèse;</li>
                    <li className='bmi-items'>A partir d'un IMC de 40, on parle d'obésité morbide.</li>
                </ul>
            </div>

        </div>
    )
}

export default Bmi