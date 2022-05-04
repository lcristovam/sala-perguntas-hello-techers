const express = require('express')
const route = require('./route')
const server = express()  //Instanciando o Express. Além de o importarmos, precisamos iniciá-lo/instanciá-lo no projeto
const path = require('path')


 
server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views' , '/')

server.set('views', path.join(__dirname , 'views'))

server.use(express.urlencoded({extended: true}))
server.use(route)


server.listen(18000 , () =>{ console.log(`Executando`)}) // Pedindo pro servidor, após em execução, escutar este arquivo em uma porta específica