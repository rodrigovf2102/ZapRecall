import ReactDOM from "react";
import App from "./App";

function Renderizar(){
    return (
        <App/>
    )
}

ReactDOM.render(<App/>,document.querySelector('.root'));