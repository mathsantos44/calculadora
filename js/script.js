resultado = document.getElementById('resultado')

function calcular(tipo, valor) {
    if (tipo == 'acao') {
        if (valor === 'c') {
            resultado.value = ''
        }
        if (valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.') {
            resultado.value += valor
        }
        if (valor === '=') {
            resultado.value = eval(resultado.value)
        }
    } else if (tipo == 'valor') {
        if (resultado.value == '0') {
            resultado.value = valor
        } else {
            resultado.value += valor
        }
    }
}