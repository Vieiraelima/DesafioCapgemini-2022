// A mediana de uma lista de números é basicamente o elemento que se encontra 
// no meio da lista após a ordenação. 
// Dada uma lista de números com um número ímpar de elementos, 
// desenvolva um algoritmo que encontre a mediana.
// Entrada: arr = [9, 2, 1, 4, 6]
// Saída: 4


const lista = [9, 2, 1, 4, 6];

function somar() {
    let soma = 0
    for(let i in lista) {
      soma += lista[i]
    }
    return soma;
  }
  console.log (somar()/lista.length)
