function cadastrarJogo() {
    // 1º PASSO - CAPTURAR INFORMAÇÕES USUÁRIO
    const nome = document.getElementById("nome").value;
    const categoria = document.getElementById("categoria").value;
    const descricao = document.getElementById("descricao").value;
    const emoji = document.getElementById("emoji").value;
    const cor = document.getElementById("cor").value;

    // 2º PASSO - CRIAR ESTRUTURA DE DADOS
    const novoJogo = {
        nome: nome,
        categoria: categoria,
        descricao: descricao,
        emoji: emoji,
        cor: cor
    }

    // 3º PASSO - ADICIONAR NA LISTA DE JOGOS
    const jogosCadastrados = JSON.parse(localStorage.getItem("jogosCadastrados")) || [];
    jogosCadastrados.push(novoJogo);
    localStorage.setItem("jogosCadastrados", JSON.stringify(jogosCadastrados))

    // 4º PASSO - REFRESH NA TELA / REDIRECIONAR PARA TELA DE JOGOS
    window.location.href = "./index.html"
}