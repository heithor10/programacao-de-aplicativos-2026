let objetos = [
    { nome: "Garrafa azul", local: "Laboratório 2", categoria: "Acessórios", data: "2026-11-25", descricao: "Tem um adesivo na tampa." },
    { nome: "Estojo preto", local: "Biblioteca", categoria: "Material escolar", data: "2026-11-26", descricao: "Fecho vermelho." }
];

function cadastrarObjeto() {
    // 1 - PEGAR VALORES INPUTS
    var nome = document.getElementById("nome").value;
    var local = document.getElementById("local").value;
    var categoria = document.getElementById("categoria").value;
    var data = document.getElementById("data").value;
    var descricao = document.getElementById("descricao").value;

    if (nome === "" || local === "" || categoria === "" || data === "" || descricao === "") {
        return;
    }

    // 2 - CRIAR UM NOVO OBJ
    var novoObjeto = {
        nome: nome,
        local: local,
        categoria: categoria,
        data: data,
        descricao: descricao
    }

    // 3 - JOGAR O NOVO OBJ PARA LISTA
    objetos.push(novoObjeto);

    // 4 - ATUALIZAR A TELA
    mostrarObjetos();

    // 5 - LIMPA O INPUT
    document.getElementById("nome").value = "";
    document.getElementById("local").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("data").value = "";
    document.getElementById("descricao").value = "";
}


function mostrarObjetos() {
    const listaObjetosHTML = document.getElementById("lista-objetos");

    listaObjetosHTML.innerHTML = "";
    for (var objeto of objetos) {
        const dataFormatada = objeto.data.split("-").reverse().join("/");

        listaObjetosHTML.innerHTML += `
      <li>
        <span class="categoria">${objeto.categoria}</span>
        <h3>${objeto.nome}</h3>
        <p class="detalhes">${objeto.local} - ${dataFormatada}</p>
        ${objeto.descricao}
        <button onclick="deletar('${objeto.nome}')">Deletar</button>
        <button onclick="atualizar('${objeto.nome}')">Atualizar</button>
      </li>
        `;
    }
}


function deletar(nome) {
    var querDeletar = confirm("DESEJA MESMO APAGAR O OBJETO " + nome);
    if (querDeletar === false) {
        return;
    }

    objetos = objetos.filter((item) => item.nome !== nome);
    mostrarObjetos();
}

function atualizar(nome) {
    var indexObjeto = objetos.findIndex(item => item.nome === nome);

    document.getElementById("nome").value = objetos[indexObjeto].nome
    document.getElementById("local").value = objetos[indexObjeto].local
    document.getElementById("categoria").value = objetos[indexObjeto].categoria
    document.getElementById("data").value = objetos[indexObjeto].data
    document.getElementById("descricao").value = objetos[indexObjeto].descricao
    document.getElementById("btn-cadastrar").innerHTML = "Salvar"
}


mostrarObjetos();