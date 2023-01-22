import React from 'react'
import './index.css'

export default function emptyRoom(){
    return (
        <div className='emptyRoom'>
            <h4>Você não enviou nenhum vídeo.</h4>
            <form>
                <h4>Insira a URL do vídeo</h4>
                <input type="url" placeholder='URL'/>
                <button className='sendButton'>Enviar</button>
            </form>            
        </div>
    )
}