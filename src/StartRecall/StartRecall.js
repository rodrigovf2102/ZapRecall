import React from "react";
import logo from "../Assets/img/logo.png";
import "./style.css";

export default function StartRecall({startRecall, IniciarRecall}) {
    return (
        <div className={startRecall}>
            <img src={logo}/>
            <div>ZapRecall</div>
            <div onClick={IniciarRecall}>Iniciar Recall!</div>
        </div>
    );
}

