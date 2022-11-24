import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./confirmed.css"
   
function Confirmed() {
    const navigate = useNavigate();
  return (
    <div className='container-confirm'>
        <div className='bloc-confirm'>
        <h1 className='confirm-text'>Ton e-mail est bien valider</h1>
        <button onClick={() => navigate("/login")} className="confirm-btn">Login</button>
        </div>
    </div>
  )
}

export default Confirmed