import express from 'express'

const app = express()



app.listen(3000,function(){console.log("Servidor em http://localhost:3000/")}) 
//Esta função inicializa um servidor (valor alto pra evitar que seja uma porta que esteja sendo utilizada)
//esta linha deve ser a ultima do programa(a ultima a ser rodada)
//O segundo parametro pode ser uma função que vai rodar