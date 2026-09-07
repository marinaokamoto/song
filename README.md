# 🎵 Song API

Aplicação web para cadastro e consulta de músicas, desenvolvida como projeto individual.

O projeto possui uma aplicação **frontend em React** integrada a uma **API REST desenvolvida com Java e Spring Boot**, utilizando **MySQL** para persistência dos dados.

---

## 📌 Sobre o projeto

A aplicação permite que o usuário:

- Informe seu nome;
- Cadastre uma música;
- Informe artista, álbum, gênero e ano de lançamento;
- Consulte as músicas cadastradas;
- Visualize os registros retornados pela API;
- Receba mensagens de erro de acordo com o status HTTP retornado pela API.

O frontend realiza as requisições HTTP para a API, que é responsável pela validação dos dados e comunicação com o banco de dados.

---

## 🛠️ Tecnologias utilizadas

### Frontend

- React
- JavaScript
- Vite
- CSS Modules
- Fetch API

### Backend

- Java 21
- Spring Boot
- Spring Web MVC
- Spring JDBC
- Maven

### Banco de dados

- MySQL

---

# 🚀 Como executar o projeto

## 1. Pré-requisitos

Antes de executar a aplicação, certifique-se de possuir:

- Java 21 ou superior;
- MySQL;
- Node.js e npm;
- Git.

---

# 🗄️ Configuração do banco de dados

A aplicação utiliza um banco MySQL chamado `song`.

O script de criação da tabela está disponível em:

songAPI/src/main/resources/schema.sql


O script cria o banco e a tabela `musica`:

CREATE DATABASE IF NOT EXISTS song;

USE song;

CREATE TABLE IF NOT EXISTS musica (
    id INT PRIMARY KEY AUTO_INCREMENT,
    musica VARCHAR(100) NOT NULL,
    artista VARCHAR(100) NOT NULL,
    album VARCHAR(100) NOT NULL,
    genero VARCHAR(150) NOT NULL,
    ano INT NOT NULL
);

Execute o script no MySQL antes de iniciar a API.

---

# 🔐 Configuração das variáveis de ambiente

A API utiliza variáveis de ambiente para configurar a conexão com o banco de dados.
Para facilitar a conexão o arquivo .env está presente no repositório.

# ☕ Executando o Backend

Entre na pasta da API: cd songAPI

### Windows
.\mvnw.cmd spring-boot:run


### Linux/macOS
./mvnw spring-boot:run


A API será iniciada em: http://localhost:8080


---

# ⚛️ Executando o Frontend

Abra outro terminal e entre na pasta do frontend: cd front


Instale as dependências: npm install

Execute a aplicação: npm run dev


O Vite disponibilizará a aplicação, normalmente, em: http://localhost:5173

---


# 📡 API

A API possui dois endpoints principais.

## POST `/song/create`

Responsável pelo cadastro de uma nova música.

POST http://localhost:8080/song/create
exemplo:
{
    "musica": "SWEET BOY",
    "artista": "Malcolm Todd",
    "album": "Sweet Boy",
    "genero": "Indie",
    "ano": 2024
}

---

## GET `/song`

Responsável por consultar todas as músicas cadastradas.

GET http://localhost:8080/song
Exemplo de resposta:
[
    {
        "id": 1,
        "musica": "SWEET BOY",
        "artista": "Malcolm Todd",
        "album": "Sweet Boy",
        "genero": "Indie",
        "ano": 2024
    },
    {
        "id": 2,
        "musica": "Please Please Please",
        "artista": "Sabrina Carpenter",
        "album": "Short n' Sweet",
        "genero": "Pop",
        "ano": 2024
    }
]


---

# ✅ Validações

Antes de realizar o cadastro, a API verifica se:

- O nome da música foi preenchido;
- O artista foi preenchido;
- O álbum foi preenchido;
- O gênero foi preenchido;
- O ano é maior que zero.

Caso alguma dessas condições não seja atendida, a API retorna:
400 Bad Request


Também é verificado se já existe uma música com o mesmo nome.

Nesse caso, a API retorna:
409 Conflict


---

# 🎨 Frontend

O frontend utiliza componentes React separados para cada etapa da aplicação.

### `Input1`

Responsável pela identificação do usuário e transição para a tela de cadastro.

### `Input2`

Responsável pelo:

- preenchimento dos dados da música;
- envio do cadastro;
- consulta das músicas;
- exibição dos resultados;
- tratamento visual dos erros HTTP.

---

# ❌ Tratamento de erros

Quando a API retorna um erro, o frontend apresenta o status HTTP.
Para ilustrar os erros HTTP, a aplicação também utiliza imagens correspondentes ao status retornado.


---

# 👩‍💻 Autora

**Marina Okamoto**

Projeto individual desenvolvido para fins acadêmicos.
