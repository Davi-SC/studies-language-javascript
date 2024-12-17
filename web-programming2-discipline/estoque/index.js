import express from 'express'
const app = express()

import path, { dirname } from "path";
import { fileURLToPath } from "url";
import handlebars from 'express-handlebars'
import Handlebars from 'handlebars'
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'
import bodyParser from 'body-parser';

//npm install body-parser

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,'public')))

//precisa instalar o handlebars npm install express-handlebars ou npm install handlebars    e   npm install allowInsecurePrototypeAccess
//Configuracao da visao
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'principal',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extend:false}))
app.use(bodyParser.json())

app.get('/',function(req,res){
    res.render('admin/index')
})
app.get('/contato',function(req,res){
    res.render('admin/contato')
})

app.get('/cadastro',function(req,res){
    res.render('produtos/cadastro')
})

app.post('/cadastro',function(req,res){//rota para receber os dados do formulario
    var produto = {
        descricao: req.body.descricao,
        preco: req.body.preco,
        estoque: req.body.estoque,
        status: 1,
        foto: '/img/semfoto.png'
    }
    res.render('produtos/detalhe',{produto})
})


app.listen(3000,()=>console.log('Servidor rodando em http://localhost:3000'))