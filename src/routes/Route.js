import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Views/Home'
import Homepage from '../Views/Homepage'
import Layout from '../component/Layout/Layout'
import Contact from '../component/Contact/Contact'
import Entry from '../component/Entry-Add/Entry'
import ErrorPage from '../component/ErrorPage'



function Routeur() {
    return (
        <div>
            <Layout/>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="Progres/*" element={<Homepage />}></Route>
                <Route path="/Ajouter" element={<Entry />}></Route>
                <Route path="Contact" element={<Contact />}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
          
        </div>
    )
}

export default Routeur;