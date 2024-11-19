import busca from "./busca.js";
import ordenacao from "./ordenacao.js";

var sequencia = [4, 5, 3, 1, 2, 7, 8, 10, 232, 25];

console.log(busca.buscaLinear(sequencia, 43));
console.log(busca.buscaBinaria(sequencia, 43));

console.log("Vetor original: ");
console.log(sequencia);
console.log("Vetor ordenado com Bubble: ");
var vetorordenado = ordenacao.bubbleSort(sequencia);
console.log(vetorordenado);
console.log("Vetor ordenado com Selection: ");
var vetorordenado2 = ordenacao.selectionSort(sequencia);
console.log(vetorordenado2);
