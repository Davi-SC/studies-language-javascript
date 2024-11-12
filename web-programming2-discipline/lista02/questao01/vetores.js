function dobraVetor(X){
    var doubleX = Array(X.length);
    for(let i = 0 ; i < X.length ; i++){
        doubleX[i] = X[i] * 2;
    }
    return doubleX;
}

function somaVetor(X, dobra){
    var soma = Array(X.length);
    let dobro = dobra(X);
    
    for(let i = 0 ; i < X.length ; i++){
        soma[i] = dobro[i] + X[i];
    }
    return soma;
}

export default {dobraVetor, somaVetor}