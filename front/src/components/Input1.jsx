import { useState } from "react";

function Input1(props) {
    const [nome, setNome] = useState("");

    return (
        <div>
            <h1>chega aí , {nome || "estranho"}.</h1>

            <span>Qual seu nome?</span> <br />
            <input
                type="text"
                placeholder="Digita seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                onBlur={props.mudarComponente}
            />
        </div>
    )
}

export default Input1;