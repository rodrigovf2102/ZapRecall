export default function ZapRecall() {
    return (
        <div className='zap-recall'>
            <div>
                <img src="./img/logo-pequeno.png"></img>
                <div>ZapRecall</div>
            </div>
            <div className='pergunta'>
                <div>Pergunta 1</div>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className='pergunta'>
                <div>Pergunta 2</div>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className='pergunta'>
                <div>Pergunta 3</div>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className='pergunta'>
                <div>Pergunta 4</div>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div>
                0/4 CONCLUÍDOS
            </div>
        </div>
    );
}