import React from 'react'
import Logo from "../../Assets/Logo.png"
import './index.css'

export default function Header(){
    return (
        <div>
            <img src={Logo} alt="eRural Logo"/>
        </div>
    )
}