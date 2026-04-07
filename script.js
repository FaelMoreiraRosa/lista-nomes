let nomes = [
    "Rafael",
    "Americo",
    "Cassandra",
    "Olavo",
    "Mirela",
    "Alessandra",
    "Jupiter",
    "Orácio",
    "Carmen",
    "Lucio"
]

function pesquisarNomes() {

    let nomePesquisa = document.getElementById('search').value
    let itensLista = ''
    for (indice in nomes) {
        let nome = nomes[indice]
        if (nomePesquisa == nome) {
            itensLista += `
        <li class="list-group-item">
            ${nome}
        </li>`
        }
    } 
    document.getElementById('list-group').innerHTML = itensLista
}

function carregarNomes() {

    let itensLista = ''
    for (indice in nomes) {
        let nome = nomes[indice]
        itensLista += `
        <li class="list-group-item">
            ${nome}
        </li>`
    }
    document.getElementById('list-group').innerHTML = itensLista

}