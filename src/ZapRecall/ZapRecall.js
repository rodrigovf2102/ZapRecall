import React from "react";
import ZapRecallIonIcons from './ZapRecallIonIcons.js';
import "./style.css";
import logoPequeno from "../Assets/img/logo-pequeno.png";
import setinha from "../Assets/img/setinha.png";


export default function ZapRecall({ zapRecall }) {

    const [ionIconList,setIonIconList] = React.useState([]);

    const [contadorIonIcon,setContadorIonIcon] = React.useState([0]);

    const [ionIconListColor, setIonIconListColor] = React.useState([]);

    const deckDesembaralhado = [
        {
            question: "O que é JSX?",
            answer: "Uma extensão da linguagem JavaScript",
            virada: false,
            classeDeck: "pergunta",
            classCardVerse: "visible",
            classCardFront: "hidden",
            classCardAnswer: "hidden",
            ionIconName : "play-outline"
        },
        {
            question: " O React é__",
            answer: "uma biblioteca JavaScript para construção de interfaces",
            virada: false,
            classeDeck: "pergunta",
            classCardVerse: "visible",
            classCardFront: "hidden",
            classCardAnswer: "hidden",
            ionIconName : "play-outline"
        },
        {
            question: "Componentes devem iniciar com __",
            answer: "letra maiúscula",
            virada: false,
            classeDeck: "pergunta",
            classCardVerse: "visible",
            classCardFront: "hidden",
            classCardAnswer: "hidden",
            ionIconName : "play-outline"
        },
        {
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões",
            virada: false,
            classeDeck: "pergunta",
            classCardVerse: "visible",
            classCardFront: "hidden",
            classCardAnswer: "hidden",
            ionIconName : "play-outline"
        },
        {
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma",
            virada: false,
            classeDeck: "pergunta",
            classCardVerse: "visible",
            classCardFront: "hidden",
            classCardAnswer: "hidden",
            ionIconName : "play-outline"
        },
        {
            question: "Usamos o npm para __ ",
            answer: "gerenciar os pacotes necessários e suas dependências",
            virada: false,
            classeDeck: "pergunta",
            classCardVerse: "visible",
            classCardFront: "hidden",
            classCardAnswer: "hidden",
            ionIconName : "play-outline"
        },
        {
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes ",
            virada: false,
            classeDeck: "pergunta",
            classCardVerse: "visible",
            classCardFront: "hidden",
            classCardAnswer: "hidden",
            ionIconName : "play-outline"
        },
        {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            virada: false,
            classeDeck: "pergunta",
            classCardVerse: "visible",
            classCardFront: "hidden",
            classCardAnswer: "hidden",
            ionIconName : "play-outline"
        }
    ]

    const [deck, setDeck] = React.useState([...deckDesembaralhado.sort(comparador)])

    function comparador() {
        return Math.random() - 0.5;
    }

    function revelarCarta(index) {
        const condicaoDeExecucao = (deck[index].ionIconName !== "close-circle" &&
        deck[index].ionIconName !== "help-circle" && deck[index].ionIconName !== "checkmark-circle");
        if (condicaoDeExecucao) {
            deck[index].virada = !deck[index].virada;
            setDeck([...deck]);
            if (deck[index].virada === true) {
                deck[index].classeDeck = "pergunta-aberta";
                deck[index].classCardVerse = "hidden"
                deck[index].classCardFront = "visible"
                setDeck([...deck]);
            }
            if (deck[index].virada === false) {
                deck[index].classeDeck = "pergunta";
                deck[index].classCardVerse = "visible";
                deck[index].classCardFront = "hidden";
                setDeck([...deck]);
            }
        }
    }

    function revelarRespostaCarta(index) {
        deck[index].classCardFront = "hidden";
        deck[index].classCardAnswer = "visible alinhar";
        setDeck([...deck]);
    }

    function responderCarta(index, resposta) {

        deck[index].classCardAnswer = "hidden";
        if (resposta === "errou") {
            deck[index].classCardVerse = "visible errou";
            deck[index].ionIconName = "close-circle";
            setDeck([...deck]);
            setContadorIonIcon(Number(contadorIonIcon+1));
            setIonIconList([...ionIconList, deck[index].ionIconName])
            setIonIconListColor([...ionIconListColor, "errou"]);
        }
        if (resposta === "quase") {
            deck[index].classCardVerse = "visible quase";
            deck[index].ionIconName = "help-circle";
            setDeck([...deck]);
            setContadorIonIcon(Number(contadorIonIcon+1));
            setIonIconList([...ionIconList, deck[index].ionIconName])
            setIonIconListColor([...ionIconListColor, "quase"]);
        }
        if (resposta === "acertou") {
            deck[index].classCardVerse = "visible acertou";
            deck[index].ionIconName = "checkmark-circle";
            setDeck([...deck]);
            setContadorIonIcon(Number(contadorIonIcon+1));
            setIonIconList([...ionIconList,deck[index].ionIconName])
            setIonIconListColor([...ionIconListColor, "acertou"]);
        }
    }

    return (
        <div className={zapRecall}>
            <div>
                <img src={logoPequeno}></img>
                <div>ZapRecall</div>
            </div>
            {deck.map((carta, index) =>
                <div className={deck[index].classeDeck}>
                    <div className={deck[index].classCardVerse}>Pergunta {index + 1}</div>
                    <div className={"answer " + deck[index].classCardFront}>{carta.question}</div>
                    <div className={"answer " + deck[index].classCardAnswer}>{carta.answer}</div>
                    <ion-icon class={"md hydrated " + deck[index].classCardVerse} onClick={
                        () => { revelarCarta(index) }} name={deck[index].ionIconName}></ion-icon>
                    <div className={"nao-lembrou " + deck[index].classCardAnswer}
                        onClick={() => { responderCarta(index, "errou") }}>Não Lembrei</div>
                    <div className={"quase-lembrou " + deck[index].classCardAnswer}
                        onClick={() => { responderCarta(index, "quase") }}>Quase não lembrei</div>
                    <div className={"lembrou " + deck[index].classCardAnswer}
                        onClick={() => { responderCarta(index, "acertou") }}>Zap!</div>
                    <img className={deck[index].classCardFront}
                        onClick={() => { revelarRespostaCarta(index) }} src={setinha}/>
                </div>)}
            <div>
                <ZapRecallIonIcons contadorIonIcon={contadorIonIcon} deckLength={deck.length} 
                                   ionIconList={ionIconList} ionIconListColor={ionIconListColor}/>
            </div>
        </div>
    );
}