import React from 'react'
import Logo from "../../Assets/Logo.png"
import './index.css'

export default function Header(){
    return (
        <div className='logo'>
            <img src={Logo} alt="Logo"/>
        </div>
    )
}