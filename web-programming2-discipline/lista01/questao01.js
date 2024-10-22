var x1 = 0.1
var x2 = 0.3
var x3 = 0.4
var w1 = 0.25
var w2 = 0.43
var w3 = 0.5

var v = x1*w1 + x2*w2 + x3*w3

var y = 1/(1 + Math.E**(-v))

if (y>0.8) {
    console.log('GATO')
} else {
    console.log('CACHORRO')
}


