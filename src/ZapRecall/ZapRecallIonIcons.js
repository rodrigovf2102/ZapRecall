import React from "react";
import sad from "../Assets/img/sad.png";
import party from "../Assets/img/party.png";

export default function ZapRecallIonIcons({ contadorIonIcon, deckLength, ionIconList, ionIconListColor , reiniciarRecall}) {
    let msg = "";
    let reiniciar="";

    if (ionIconList.length === deckLength) {
        if ((ionIconList.filter(ionIcon => ionIcon === "close-circle")).length !== 0) {
            msg =
                <>
                    <div className="titulo-resultado">
                        <img src={sad} />
                        <div>Putz...</div>
                    </div>
                    <div className="msg-resultado">Ainda faltam alguns...Mas não desanime!</div>
                </>;
        }
        if ((ionIconList.filter(ionIcon => ionIcon === "close-circle")).length === 0) {
            msg =
                <>
                    <div className="titulo-resultado">
                        <img src={party}/>
                        <div>Parabéns!</div>
                    </div>
                    <div className="msg-resultado">Você não esqueceu de nenhum falshcard!</div>
                </>;
        }
        reiniciar = <div onClick={reiniciarRecall} className="reiniciar-recall">REINICIAR RECALL</div>;
    }

    return (
        <>
            {msg}
            <div className="placar">{contadorIonIcon}/{deckLength} CONCLUÍDOS</div>
            <div className="ion-icons"> 
            {ionIconList.map((ionIcon, index) =>
                <ion-icon class={"md hydrated " + ionIconListColor[index]} name={ionIcon}></ion-icon>)}
            </div>
            {reiniciar}
        </>
    );
}