let tarefasArray = [] //Array vazio, lista vazia

document.getElementById('form-tarefa').addEventListener('submit', function(event) {
//pega o submit do botao dentro do formulario e adiciona um ouvidor de eventos com uma função
    event.preventDefault() //?
    let novaTarefa = document.getElementById('nova-tarefa').value //a variavel novatarefa é o valor(string) do input
    tarefasArray.push(novaTarefa) //envia a novatarefa para o array

    let lista = document.createElement('li') //se eu quero escrever as novastarefas na ul, tenho que criar uma li
    lista.textContent = novaTarefa //cada li vai ter uma novatarefa

    let check = document.createElement('input')
    check.type = 'checkbox'

    let botaoRemover = document.createElement('button')
    botaoRemover.type = 'button'
    botaoRemover.innerText = 'Remover'

    document.getElementById('lista-tarefas').appendChild(lista) //vai escrever cada tarefa em cada li(filho) dentro da ul(pai)
    lista.appendChild(check)
    lista.appendChild(botaoRemover)
    document.getElementById('nova-tarefa').value = '' //acho q fica sempre aguardando a proxima novatarefa

    botaoRemover.addEventListener('click', function(){
        document.getElementById('lista-tarefas').removeChild(lista)
    })

})