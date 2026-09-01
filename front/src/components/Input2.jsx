import { useState } from "react";

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
        <div>

            <span>Qual sua música fav?</span> <br />
            <input
                type="text"
                placeholder="Digite a mais mais"
                value={musica}
                onChange={(e) => setMusica(e.target.value)}
            />
            <br /> <br />

            <span>Artista?</span> <br />
            <input
                type="text"
                placeholder="De quem é a música"
                value={artista}
                onChange={(e) => setArtista(e.target.value)}
            />
            <br /> <br />

            <span>Sabe o álbum?</span> <br />
            <input
                type="text"
                placeholder="Digite o nome do álbum"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
            />
            <br /> <br />

            <span>Gênero?</span> <br />
            <input
                type="text"
                placeholder="Da música, não o seu"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
            />
            <br /> <br />

            <span>Ano de lançamento?</span> <br />
            <input
                type="number"
                placeholder="Se você souber"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
            />
            <br /> <br />

            <button onClick={cadastrar}>cadastrar</button>
            <button onClick={props.mudarComponente}>voltar</button> <br />

            <p>{mensagem}</p> 
            <img src={imagemErro} alt="Erro HTTP" />
            <br /><br />

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
    )

}

export default Input2;