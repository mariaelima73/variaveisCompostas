document.getElementById('gerar-numero').addEventListener('click', function(){
    let numAle = Math.floor(Math.random() * 10) + 1

    document.getElementById('numero-gerado').innerText = `Número gerado: ${numAle}`
})