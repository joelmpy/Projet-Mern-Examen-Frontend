import React from 'react'
import info from '../../data/bmi.json'
import { AiOutlineFastBackward} from "react-icons/ai";
import {useParams} from "react-router"
import {useNavigate} from "react-router-dom"


function Bmi() {


    const {bmi} = useParams()
    
    const navigate = useNavigate()
    
  return (
    
    <div>
        <div className="icon">
            <AiOutlineFastBackward onClick={() => navigate(-1, {replace: true})}/>
        </div>
        {
            info.map((list, index) => (
                    <div key={index}>
                        <p>{bmi}</p>
                        <p>{list.title}</p>
                    </div>
            ))
        }
        <h1>Bmi ici</h1>
    </div>
  )
}

export default Bmi