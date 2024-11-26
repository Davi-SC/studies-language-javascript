function bubbleSort(vetor) {
  let n = vetor.length;
  do {
    for (let i = 0; i < n; i++) {
      if (vetor[i] > vetor[i + 1]) {
        [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
      }
    }
    n--;
  } while (n >= 0);

  return vetor;
}

function selectionSort(vetor) {
  for (let i = 0; i < vetor.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [vetor[i], vetor[minIndex]] = [vetor[minIndex], vetor[i]];
    }
  }
  return vetor;
}



export default { bubbleSort, selectionSort };
