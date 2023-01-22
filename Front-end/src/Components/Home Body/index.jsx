import React from 'react'
import Ox from "../../Assets/Ox.png"
import './index.css'
import {useHistory} from "react-router-dom";

export default function Homebody(){
    const history = useHistory()
    function handleGoRoom() {
        window.location.href="http://localhost:3000/room"
        }
    return (
        <div className='homeBody'>
            <div className='heroText'>
                <h2>Olá, vendedor</h2>
                <h4>Crie uma sala para disponibilizar um vídeo sobre o produto a ser vendido para seus potenciais clientes.</h4>
                <button onClick={handleGoRoom} className='createRoom'>Criar sala</button>
            </div>
            <img src={Ox} alt="Ox"/>
        </div>
    )
}