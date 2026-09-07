import { useState } from "react";
import styles from "./Input2.module.css";

function Input2(props) {
    const [musica, setMusica] = useState("");
    const [artista, setArtista] = useState("");
    const [album, setAlbum] = useState("");
    const [genero, setGenero] = useState("");
    const [ano, setAno] = useState("");

    const [mensagem, setMensagem] = useState("");
    const [resultado, setResultado] = useState([]);
    const [imagemErro, setImagemErro] = useState("");

    async function cadastrar() {
        const resposta = await fetch ("http://localhost:8080/song/create",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify
                ({
                    musica: musica,
                    artista: artista,
                    album: album,
                    genero: genero,
                    ano: Number(ano)
                })
            }
        );

        if (!resposta.ok) {
            setMensagem("Erro " + resposta.status);
            setImagemErro(`https://http.fish/${resposta.status}.jpg`);
            return;
            
        } else listar();
    };

    async function listar() {
    try {
        const resposta = await fetch("http://localhost:8080/song");

        if (!resposta.ok) {
            throw new Error(`Erro ${resposta.status}`);
        }

        const dados = await resposta.json();
        setResultado(dados);
        console.log(dados);
    } catch (erro) {
        console.log("Falhou:", erro.message);
    }
    }
        
    return (
    <div className={styles.fullpage}>
        <div className={styles.inputs}>
    
            <div className={styles.campo}>
                <span>Qual sua música fav?</span>
                <input
                    type="text"
                    placeholder="Digite a mais mais"
                    value={musica}
                    onChange={(e) => setMusica(e.target.value)}
                />
            </div>

            <div className={styles.campo}>
                <span>Artista?</span>
                <input
                    type="text"
                    placeholder="De quem é a música"
                    value={artista}
                    onChange={(e) => setArtista(e.target.value)}
                />
            </div>

            <div className={styles.campo}>
                <span>Sabe o álbum?</span>
                <input
                    type="text"
                    placeholder="Digite o nome do álbum"
                    value={album}
                    onChange={(e) => setAlbum(e.target.value)}
                />
            </div>

            <div className={styles.campo}>
                <span>Gênero?</span>
                <input
                    type="text"
                    placeholder="Da música, não o seu"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                />
            </div>

            <div className={styles.campo}>
                <span>Ano de lançamento?</span>
                <input
                    type="number"
                    placeholder="Se você souber"
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                />
            </div>
    
            <div className={styles.botoes}>
                <button onClick={cadastrar}>cadastrar</button>
                <button onClick={props.mudarComponente}>voltar</button>
            </div>
        </div>

        <div className={styles.results}>
            {mensagem && <p>{mensagem}</p>}
            {imagemErro && (
                <div className={styles.containerImagemErro}>
                    <img
                        className={styles.imagemErro}
                        src={imagemErro}
                        alt="Erro HTTP"
                    />
                </div>
)}

            {resultado.map((musica) => (
                <div key={musica.id}>
                    <p>Música: {musica.musica}</p>
                    <p>Artista: {musica.artista}</p>
                    <p>Álbum: {musica.album}</p>
                    <p>Gênero: {musica.genero}</p>
                    <p>Ano: {musica.ano}</p>
                    <hr />
                </div>
            ))}
        </div>

    </div>
    )

}

export default Input2;