import React from 'react'
import Ox from "../../Assets/Ox.png"
import './index.css'


export default function Homebody(){
    return (
        <div className='homeBody'>
            <div className='heroText'>
                <h2>Olá, vendedor</h2>
                <h4>Crie uma sala para disponibilizar um vídeo sobre o produto a ser vendido para seus potenciais clientes.</h4>
                <button>Criar sala</button>
            </div>
            <img src={Ox} alt="Ox"/>
        </div>
    )
}