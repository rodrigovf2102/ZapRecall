import React from "react";

export default function StartRecall({startRecall, IniciarRecall}) {
    return (
        <div className={startRecall}>
            <img src='./img/logo.png'/>
            <div>ZapRecall</div>
            <div onClick={IniciarRecall}>Iniciar Recall!</div>
        </div>
    );
}

