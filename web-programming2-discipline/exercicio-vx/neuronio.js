function calcula_neuronio(X, funcoes){
    var W = treinamento(X.length)
    var v = 0
    for(let i ; i < X.length;i++){
        v += (X[i]*W[i])
    }
    var f = funcoes(v)
    return f
}

function treinamento(n){
    var W = []
    for(let i = 0 ; i < n ; i++){
        W.push(Math.random())
    }
    return W
}

export default calcula_neuronio