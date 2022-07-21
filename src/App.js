import StartRecall from './StartRecall';
import ZapRecall from './ZapRecall';
import React from 'react';

export default function App(){

    const [startRecall,setStartRecall] = React.useState("start-recall");
    const [zapRecall,setZapRecall] = React.useState("zap-recall hidden");

    function IniciarRecall(){
        setStartRecall("start-recall hidden");
        setZapRecall("zap-recall");
    }

    return (
        <>
            <StartRecall startRecall={startRecall} IniciarRecall={IniciarRecall}/>
            <ZapRecall zapRecall={zapRecall}/>
        </>
    );
}