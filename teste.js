var frutas = ["maçã", "banana", "laranja"]
var quant = [1, 2, 2]
var preço = [10, 5, 3]

//teste
console.log(frutas[0])
console.log(quant[0])
console.log(preço[0])
//--------

document.getElementById('lista').innerText = frutas.join(', ')

var maçã = {
    nome: frutas[0],
    quant: quant[0],
    preço: preço[0]
}

var banana = {
    nome: frutas[1],
    quant: quant[1],
    preço: preço[1]
}

var laranja = {
    nome: frutas[2],
    quant: quant[2],
    preço: preço[2]
}


document.getElementById('buscador').addEventListener('click', function() {
    var resultado = document.getElementById('objeto').value

    switch(resultado){
        case 'maçã':
            document.getElementById('resultado').innerHTML = `Nome: ${maçã.nome}<br>Quant: ${maçã.quant}<br>Preço: ${maçã.preço}`
        break
        case 'banana':
            document.getElementById('resultado').innerHTML = `Nome: ${banana.nome}<br>Quant: ${banana.quant}<br>Preço: ${banana.preço}`
        break
        case 'laranja':
            document.getElementById('resultado').innerHTML = `Nome: ${laranja.nome}<br>Quant: ${laranja.quant}<br>Preço: ${laranja.preço}`
        break
        default:
            document.getElementById('resultado').innerHTML = 'Produto não encontrado!'
    }
})

