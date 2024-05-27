function calcular(operador) {
    let numero1 = Number((document.getElementById('numero1')).value)
    let numero2 = Number((document.getElementById('numero2')).value)
    let resultado    

    switch(operador){
        case '+':
            resultado = numero1 + numero2
            document.getElementById('resultado').innerText = `A soma de ${numero1} e ${numero2} é ${resultado.toFixed(2)}.`
            break
        case '-':
            resultado = numero1 - numero2
            document.getElementById('resultado').innerText = `A soma de ${numero1} e ${numero2} é ${resultado.toFixed(2)}.`
            break
        case '*':
            resultado = numero1 * numero2
            document.getElementById('resultado').innerText = `A soma de ${numero1} e ${numero2} é ${resultado.toFixed(2)}.`
            break
        case '/':
            resultado = numero1 / numero2
            document.getElementById('resultado').innerText = `A soma de ${numero1} e ${numero2} é ${resultado.toFixed(2)}.`
            break
    }

}