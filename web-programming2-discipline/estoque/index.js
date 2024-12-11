import express from 'express'
const app = express()

import path, { dirname } from "path";
import { fileURLToPath } from "url";
import handlebars from 'express-handlebars'
import Handlebars from 'handlebars'
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,'public')))

//precisa instalar o handlebars npm install express-handlebars ou npm install handlebars    e   npm install allowInsecurePrototypeAccess
//Configuração da visao
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'principal',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')

app.get('/',function(req,res){
    res.render('admin/index')
})
app.get('/',function(req,res){
    res.render('admin/contato')
})


app.listen(3000,()=>console.log('Servidor rodando em http://localhost:3000'))