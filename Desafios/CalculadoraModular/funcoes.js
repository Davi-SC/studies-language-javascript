function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}
function divisao(a, b) {
  return a / b;
}

function exponenciacao(a, b) {
  return a ** b;
}

function radiciacao(a, b) {
  return a ** (1 / b);
}

function equacaoafim(a, b, x, multi, adicao) {
  return adicao(multi(a, x), b);
}

export default {
  soma,
  subtracao,
  divisao,
  multiplicacao,
  exponenciacao,
  radiciacao,
  equacaoafim,
};
