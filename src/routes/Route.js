import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {useContext} from 'react'
import Home from '../Views/Home'
import Homepage from '../Views/Homepage'
import Layout from '../component/Layout/Layout'
import Contact from '../component/Contact/Contact'
import Entry from '../component/Entry-Add/Entry'
import ErrorPage from '../component/ErrorPage'
import "../App.css"
import Footer from '../component/Footer/Footer'
import Login from "../Views/Login/Login"
import Bmi from '../component/Bmi-info/Bmi'
import NavBar from '../component/Navbar/Navbar'
import Confirmed from '../component/Confirmed'
import { User } from "../App"
import Signup from '../Views/Signup/Signup'




function Routeur() {

    const context = useContext(User)
    return (
        <div>
            {
                context.Log ? <Layout/> : <NavBar/>
            }
            <Routes>
                {
                    context.Log?
                <>
                <Route path="/" element={<Home />}></Route>
                <Route path="Progres/*" element={<Homepage />}></Route>
                <Route path="/Ajouter" element={<Entry />}></Route>
                <Route path="Contact" element={<Contact />}></Route>
                <Route path='BMI/:bmi' element={<Bmi/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
                </>
                :
                <>
                <Route path="/" element={<Home />}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/confirmed' element={<Confirmed/>}></Route>
                <Route path="*" element={<Login/>}></Route>
                </>
            }
            </Routes>
            <Footer/>      
        </div>
    )
}

export default Routeur;