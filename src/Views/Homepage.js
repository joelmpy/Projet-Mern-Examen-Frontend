import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ProgreStats from '../component/Proges-app/ProgreStats'
import StatsApp from '../component/Stats-App/StatsApp'

function Homepage() {
  return (
    <Routes>
      <Route path='/' element={<StatsApp/>}></Route>
      <Route path=':id' element={<ProgreStats/>}></Route>
    </Routes>
  )
}

export default Homepage