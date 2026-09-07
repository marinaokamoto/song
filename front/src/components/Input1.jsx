import { useState } from "react";
import peixe from "../assets/peixe.jpg";
import styles from "./Input1.module.css";

function Input1(props) {
    const [nome, setNome] = useState("");

    return (
        <div>

            <h1>
                chega aí, {nome || "estranho"}.
            </h1>

            <span>Qual seu nome?</span>
            <br />

            <input
                type="text"
                placeholder="Digita seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                onBlur={props.mudarComponente}
            />

            <br />
            <br />
            <br />
            <br />

            <img
                className={styles.peixe}
                src={peixe}
                alt=""
            />

        </div>
    );
}

export default Input1;