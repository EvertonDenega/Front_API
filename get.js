console.log("rodando arquivo JS")

function get_alunos(){

    fetch('http://localhost:8000/api/v1/alunos/', {
        headers: {
            'Accept': 'aplication/json'
        }
    })
        .then(response => response.text())
        .then(text => {
            console.log(text)

            let dados = JSON.parse(text)
            console.log(dados)

            let tbody = document.getElementById("tbody-alunos")
            dados.forEach(aluno => {
                tbody.innerHTML += `
                <tr>
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.idade}</td>
                <td>${aluno.email}</td>
                </tr>
                `
            });
        })}

function get_aluno(){
    let id = document.getElementById('id_busca').value
    fetch(`http://localhost:8000/api/v1/alunos/${id}`, {
        headers: {
            'Accept': 'aplication/json'
        }
    })
    .then(response => response.text())
    .then(text => {
        console.log(text)

        let dados = JSON.parse(text)
        console.log(dados)

        let tbody = document.getElementById("tbody-alunos")   
        tbody.innerHTML = "";
        tbody.innerHTML += `
            <tr>
            <td>${dados.id}</td>
            <td>${dados.nome}</td>
            <td>${dados.idade}</td>
            <td>${dados.email}</td>
            </tr>
            `
        });
}


function get_usuarios(){

    fetch('http://localhost:8000/api/v1/usuarios/', {
        headers: {
            'Accept': 'aplication/json'
        }
    })
        .then(response => response.text())
        .then(text => {
            console.log(text)

            let dados_usuarios = JSON.parse(text)
            console.log(dados_usuarios)

            let tbody = document.getElementById("tbody-usuarios")
            dados_usuarios.forEach(usuario => {
                tbody.innerHTML += `
                <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.idade}</td>
                <td>${usuario.email}</td>
                </tr>
                `
            });
        })}

function get_professores(){

    fetch('http://localhost:8000/api/v1/professores/', {
        headers: {
            'Accept': 'aplication/json'
        }
    })
        .then(response => response.text())
        .then(text => {
            console.log(text)

            let dados_professores = JSON.parse(text)
            console.log(dados_professores)

            let tbody = document.getElementById("tbody-professores")
            dados_professores.forEach(professor => {
                tbody.innerHTML += `
                <tr>
                <td>${professor.id}</td>
                <td>${professor.nome}</td>
                <td>${professor.idade}</td>
                <td>${professor.email}</td>
                </tr>
                `
            });
        })}

get_alunos()
get_usuarios()
get_professores()