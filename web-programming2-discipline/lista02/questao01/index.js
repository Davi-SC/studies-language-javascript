import fx from './vetores.js'

var X = [10 , 2 , 8 , 25 , 15]

var resultado = fx.somaVetor(X,fx.dobraVetor)

// ou
// var resultado2 = somaVetor(X, function(a){
//     var doubleX = Array(X.length);
//     for(let i = 0 ; i < X.length ; i++){
//         doubleX[i] = X[i] * 2;
//     }
//     return doubleX;
// })
console.log(resultado)