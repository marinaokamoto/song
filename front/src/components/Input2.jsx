import { useState } from "react";

function Input2(props) {
    const [musica, setMusica] = useState("");
    const [artista, setArtista] = useState("");
    const [album, setAlbum] = useState("");
    const [genero, setGenero] = useState("");
    const [ano, setAno] = useState("");

    const [mensagem, setMensagem] = useState("");

    async function cadastrar() {
        const resposta = await fetch ("",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify
                ({
                    musica: musica,
                    artista: artista,
                    album: album,
                    genero: genero,
                    ano: ano
                })
            }
        );

        if (!resposta.ok) {
            setMensagem("Erro " + resposta.status);
            return;
        }

        const dados = await resposta.json();
        setMensagem(dados.mensagem);
    };

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
                type="text"
                placeholder="Se você souber"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
            />
            <br /> <br />

            <button onClick={cadastrar}>cadastrar</button>
            <p>{mensagem}</p>

        </div>
    )

}

export default Input2;