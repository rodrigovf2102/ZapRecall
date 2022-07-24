import React from "react";
import ZapRecallIonIcons from './ZapRecallIonIcons.js';
import "./style.css";
import logoPequeno from "../Assets/img/logo-pequeno.png";
import setinha from "../Assets/img/setinha.png";


export default function ZapRecall({ zapRecall }) {

    const [classeDeck, setClasseDeck] = React.useState(
        ["pergunta", "pergunta", "pergunta", "pergunta",
            "pergunta", "pergunta", "pergunta", "pergunta"]);

    const [classCardVerse, setclassCardVerse] = React.useState(
        ["visible", "visible", "visible", "visible", "visible", "visible", "visible", "visible",]);

    const [classCardFront, setclassCardFront] = React.useState(
        ["hidden", "hidden", "hidden", "hidden", "hidden", "hidden", "hidden", "hidden"]);

    const [classCardAnswer, setclassCardAnswer] = React.useState(
        ["hidden", "hidden", "hidden", "hidden", "hidden", "hidden", "hidden", "hidden"]);

    const [ionIconName, setIonIconName] = React.useState(
        ["play-outline", "play-outline", "play-outline", "play-outline",
            "play-outline", "play-outline", "play-outline", "play-outline"]);

    const [ionIconList,setIonIconList] = React.useState([]);

    const [contadorIonIcon,setContadorIonIcon] = React.useState([0]);

    const [ionIconListColor, setIonIconListColor] = React.useState([]);

    const deckDesembaralhado = [
        {
            question: "O que é JSX?",
            answer: "Uma extensão da linguagem JavaScript",
            virada: false
        },
        {
            question: " O React é__",
            answer: "uma biblioteca JavaScript para construção de interfaces",
            virada: false
        },
        {
            question: "Componentes devem iniciar com __",
            answer: "letra maiúscula",
            virada: false
        },
        {
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões",
            virada: false
        },
        {
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma",
            virada: false
        },
        {
            question: "Usamos o npm para __ ",
            answer: "gerenciar os pacotes necessários e suas dependências",
            virada: false
        },
        {
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes ",
            virada: false
        },
        {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            virada: false
        }
    ]

    const [deck, setDeck] = React.useState([...deckDesembaralhado.sort(comparador)])

    function comparador() {
        return Math.random() - 0.5;
    }

    function revelarCarta(index) {
        const condicaoDeExecucao = (ionIconName[index] !== "close-circle" &&
        ionIconName[index] !== "help-circle" && ionIconName[index] !== "checkmark-circle");
        if (condicaoDeExecucao) {
            deck[index].virada = !deck[index].virada;
            setDeck([...deck]);
            if (deck[index].virada === true) {
                classeDeck[index] = "pergunta-aberta";
                setClasseDeck([...classeDeck]);
                classCardVerse[index] = "hidden";
                setclassCardVerse([...classCardVerse]);
                classCardFront[index] = "visible";
                setclassCardFront([...classCardFront]);
            }
            if (deck[index].virada === false) {
                classeDeck[index] = "pergunta";
                setClasseDeck([...classeDeck]);
                classCardVerse[index] = "visible";
                setclassCardVerse([...classCardVerse]);
                classCardFront[index] = "hidden";
                setclassCardFront([...classCardFront]);
            }
        }
    }

    function revelarRespostaCarta(index) {
        classCardFront[index] = "hidden";
        setclassCardFront([...classCardFront]);
        classCardAnswer[index] = "visible alinhar";
        setclassCardAnswer([...classCardAnswer]);
    }

    function responderCarta(index, resposta) {

        classCardAnswer[index] = "hidden";
        setclassCardAnswer([...classCardAnswer]);
        if (resposta === "errou") {
            classCardVerse[index] = "visible errou";
            setclassCardVerse([...classCardVerse]);
            ionIconName[index] = "close-circle";
            setIonIconName([...ionIconName]);
            setContadorIonIcon(Number(contadorIonIcon+1));
            setIonIconList([...ionIconList, ionIconName[index]])
            setIonIconListColor([...ionIconListColor, "errou"]);
        }
        if (resposta === "quase") {
            classCardVerse[index] = "visible quase";
            setclassCardVerse([...classCardVerse]);
            ionIconName[index] = "help-circle";
            setIonIconName([...ionIconName]);
            setContadorIonIcon(Number(contadorIonIcon+1));
            setIonIconList([...ionIconList, ionIconName[index]])
            setIonIconListColor([...ionIconListColor, "quase"]);
        }
        if (resposta === "acertou") {
            classCardVerse[index] = "visible acertou";
            setclassCardVerse([...classCardVerse]);
            ionIconName[index] = "checkmark-circle";
            setIonIconName([...ionIconName]);
            setContadorIonIcon(Number(contadorIonIcon+1));
            setIonIconList([...ionIconList, ionIconName[index]])
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
                <div className={classeDeck[index]}>
                    <div className={classCardVerse[index]}>Pergunta {index + 1}</div>
                    <div className={"answer " + classCardFront[index]}>{carta.question}</div>
                    <div className={"answer " + classCardAnswer[index]}>{carta.answer}</div>
                    <ion-icon class={"md hydrated " + classCardVerse[index]} onClick={
                        () => { revelarCarta(index) }} name={ionIconName[index]}></ion-icon>
                    <div className={"nao-lembrou " + classCardAnswer[index]}
                        onClick={() => { responderCarta(index, "errou") }}>Não Lembrei</div>
                    <div className={"quase-lembrou " + classCardAnswer[index]}
                        onClick={() => { responderCarta(index, "quase") }}>Quase não lembrei</div>
                    <div className={"lembrou " + classCardAnswer[index]}
                        onClick={() => { responderCarta(index, "acertou") }}>Zap!</div>
                    <img className={classCardFront[index]}
                        onClick={() => { revelarRespostaCarta(index) }} src={setinha}/>
                </div>)}
            <div>
                <ZapRecallIonIcons contadorIonIcon={contadorIonIcon} deckLength={deck.length} 
                                   ionIconList={ionIconList} ionIconListColor={ionIconListColor}/>
            </div>
        </div>
    );
}