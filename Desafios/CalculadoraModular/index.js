// treinando modularização e função de callback

import calculadora from "./funcoes.js";

console.log("2+3 = ", calculadora.soma(2, 3));
console.log("2-3 = ", calculadora.subtracao(2, 3));
console.log("2x3 = ", calculadora.multiplicacao(2, 3));
console.log("2/3 = ", calculadora.divisao(2, 3));
console.log("2³ = ", calculadora.exponenciacao(2, 3));
console.log("raiz cubica de 1 = ", calculadora.radiciacao(2, 3));
console.log(
  "f(x) = 5x + 4 --> f(2) = ",
  calculadora.equacaoafim(5, 4, 2, calculadora.multiplicacao, calculadora.soma)
);
