function buscaBinaria(vetor, buscado) {
  var max = vetor.length;
  var min = 0;

  while (min <= max) {
    var meio = (max + min) / 2;
    var escolha = vetor[meio];

    if (escolha == buscado) {
      return "O item ", buscado, " esta na posicao ", i + 1, " do vetor";
    }
    if (escolha > buscado) {
      max = meio - 1;
    } else {
      min = meio + 1;
    }
  }
  return "O item " + buscado + " não esta na lista";
}
function buscaLinear(vetor, buscado) {
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] == buscado) {
      return "O item " + buscado + " esta na posicao " + i + 1 + " do vetor";
    }
  }
  return "O item " + buscado + " não esta na lista";
}

export default { buscaBinaria, buscaLinear };
