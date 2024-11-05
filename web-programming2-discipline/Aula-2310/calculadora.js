function soma( a , b ) {
    return a + b
}
function subtracao( a , b ) {
    return a - b
}
function divisao( a , b ) {
    return a / b
}
function multiplicacao( a , b ) {
    return a * b
}

function clicousoma(){
    let v1 = document.getElementById("v1").value
    let v2 = document.getElementById("v2").value
    let s = soma(parseFloat(v1),parseFloat(v2))
    document.getElementById("resultado").value = s
}
function clicousub(){
    let v1 = document.getElementById("v1").value
    let v2 = document.getElementById("v2").value
    let s = subtracao(parseFloat(v1),parseFloat(v2))
    document.getElementById("resultado").value = s
}
function clicoudiv(){
    let v1 = document.getElementById("v1").value
    let v2 = document.getElementById("v2").value
    let s = divisao(parseFloat(v1),parseFloat(v2))
    document.getElementById("resultado").value = s
}
function clicoumult(){
    let v1 = document.getElementById("v1").value
    let v2 = document.getElementById("v2").value
    let s = multiplicacao(parseFloat(v1),parseFloat(v2))
    document.getElementById("resultado").value = s
}

