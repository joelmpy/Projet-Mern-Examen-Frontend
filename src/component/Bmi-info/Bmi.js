import React from 'react'
import info from '../../data/bmi.json'
import { AiOutlineFastBackward } from "react-icons/ai";
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"
import "./bmi-info.css"
import { useState, useEffect } from "react"
import faible from "../../assets/faible.svg"
import normal from "../../assets/normal.svg"
import surpoids from "../../assets/surpoids.svg"
import obeseI from "../../assets/Obese 1.svg"
import obeseII from "../../assets/Obese 2.svg"


function Bmi() {

    const { bmi } = useParams()
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const [theme, setTheme] = useState({})
    const [textMsg, setTextMsg] = useState('fff')
    // const imgSrc = ""

    // pour mettre a jour la couleur est le test // 

    useEffect(() => {
        let tableColor = []
        if (bmi < 18.5) {
            setMessage('Tu es trop maigre')
            tableColor = ["black", "#128bac"]
            setTextMsg(info[0].maigre_imc)
        } else if (19 <= bmi && bmi < 25) {
            setMessage("Tu es Normal")
            tableColor = ["black", "#63b739"]
            setTextMsg(info[0].normal_imc)

        } else if (25 <= bmi && bmi < 30) {
            setMessage("Tu es en surpoids")
            tableColor = ["black", "#f9efc8"]
            setTextMsg(info[0].surpoids_imc)

        } else if (30 <= bmi && bmi < 39.9) {
            setMessage("Tu es obese")
            tableColor = ["black", "orange"]
            setTextMsg(info[0].obeseI_imc)

        } else {
            setMessage("Tu es en Obesite morbite")
            tableColor = ["black", "red"]
            setTextMsg(info[0].obeseII_imc)
        }

        setTheme({
            color: tableColor[0],
            backgroundColor: tableColor[1]
        })

    }, [])

    // pour l'image //

    let imgSrc;

    if (bmi < 18.5) {
        imgSrc = faible
    } else if (19 <= bmi && bmi < 25) {
        imgSrc = normal
    } else if (25 <= bmi && bmi < 30) {
        imgSrc = surpoids
    } else if (30 <= bmi && bmi < 39.9) {
        imgSrc = obeseI
    } else {
        imgSrc = obeseII
    }


    return (

        <div className='container-imc'>
                      <div className="icon">
                <AiOutlineFastBackward className="icon-btn" onClick={() => navigate(-1, { replace: true })} />
                <p onClick={() => navigate(-1, { replace: true })}>Retour a mes resultats</p>
            </div>
            <div className="title-imc">
                <h1 className="section-imc">Le ?? BMI ?? (Body Mass Index)</h1>
            </div>
          

            <div className="section-history">
                <p>Pour d??terminer si quelqu'un a un poids trop ??lev?? ou, au contraire, est trop maigre, on utilise le plus souvent la mesure du ?? BMI ?? (Body Mass Index). En fran??ais, on parle d'Indice de Masse Corporelle (IMC) ou encore d'indice de Quetelet (du nom du Belge, math??maticien, statisticien, sociologue et astronome, qui l'a mis au point). Le calcul consiste ?? diviser le poids par la taille au carr?? (kg/m??). </p>
            </div>
            {
                info.map((list, index) => (
                    <div key={index} className='container-bmi' style={theme} >
                        <p>{list.title} : </p>
                        <p className='result-bmi'>{bmi}</p>
                    </div>
                ))
            }
            <div className='img-container'>
                <img src={imgSrc}></img>
                <p>{message}</p>
                <p className='text_imc'>{textMsg}</p>
            </div>

            <h3 className='title-bmi'>Que signifie mon r??sultat ?</h3>
            <div className='section-info-result'>
                <p>Le r??sultat ainsi obtenu permet de <span>comparer son IMC ?? l'indice souhaitable pour ??tre/rester en bonne sant??.</span> On consid??re g??n??ralement que:</p>
                <ul className='bmi-item' >
                    <li className='bmi-items' >Un IMC entre 18,5 et 25 (kg/m??) est satisfaisant;</li>
                    <li className='bmi-items'>Si l'IMC est inf??rieur ?? 18,5, on est probablement trop maigre;</li>
                    <li className='bmi-items' >Si l'IMC se situe entre 25 et 30, on a probablement quelques kilos en trop;</li>
                    <li className='bmi-items' >Si l'IMC se situe entre 30 et 40, on est ob??se;</li>
                    <li className='bmi-items'>A partir d'un IMC de 40, on parle d'ob??sit?? morbide.</li>
                </ul>
            </div>

        </div>
    )
}

export default Bmi