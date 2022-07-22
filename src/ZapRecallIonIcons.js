import React from "react";

export default function ZapRecallIonIcons({ contadorIonIcon, deckLength, ionIconList, ionIconListColor }) {
    let msg = "";

    if (ionIconList.length === deckLength) {
        if ((ionIconList.filter(ionIcon => ionIcon === "close-circle")).length !== 0) {
            msg =
                <>
                    <div className="titulo-resultado">
                        <img src="./img/sad.png" />
                        <div>Putz...</div>
                    </div>
                    <div className="msg-resultado">Ainda faltam alguns...Mas não desanime!</div>
                </>;
        }
        if ((ionIconList.filter(ionIcon => ionIcon === "close-circle")).length === 0) {
            msg =
                <>
                    <div className="titulo-resultado">
                        <img src="./img/party.png" />
                        <div>Parabéns!</div>
                    </div>
                    <div className="msg-resultado">Você não esqueceu de nenhum falshcard!</div>
                </>;
        }
    }

    return (
        <>
            {msg}
            <div className="placar">{contadorIonIcon}/{deckLength} CONCLUÍDOS</div>
            {ionIconList.map((ionIcon, index) =>
                <ion-icon class={"md hydrated " + ionIconListColor[index]} name={ionIcon}></ion-icon>)}
        </>
    );
}