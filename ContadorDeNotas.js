var valor = parseInt(prompt('Digite um valor em reais:'))


var nota100 = Math.floor(valor / 100)
valor %= 100

var nota50 = Math.floor(valor / 50)
valor %= 50

var nota10 = Math.floor(valor / 10)
valor %= 10

var nota5 = Math.floor(valor / 5)
valor %= 5

var nota1 = Math.floor(valor / 1)


console.log(valor + '//' + ' pode ser dividido em ' + nota100 + ' notas de 100' + ', ' + nota50 + ' notas de 50, ' + nota10 + ' notas de 10, ' + nota5 + ' notas de 5 e ' + nota1 + ' notas de 1')