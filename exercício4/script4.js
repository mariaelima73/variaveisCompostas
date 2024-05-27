let quantCliques = 0

document.getElementById('botao-cliques').addEventListener('click', function(){
    quantCliques++

    document.getElementById('contador-cliques').innerText = `Cliques: ${quantCliques}`
})