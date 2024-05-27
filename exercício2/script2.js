let tarefasArray = []

document.getElementById('form-tarefa').addEventListener('submit', function(event) {
    event.preventDefault()
    let novaTarefa = document.getElementById('nova-tarefa').value
    tarefasArray.push(novaTarefa)
    document.getElementById('lista-tarefas').innerText = `Lista de Frutas:
    ${tarefasArray}`
    document.getElementById('nova-tarefa').value = ''
})