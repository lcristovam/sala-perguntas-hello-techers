const express = require('express')
const route = express.Router()

const QuestionController = require('./controllers/QuestionController')
const RoomController = require("./controllers/RoomController")

route.get('/' , (req , res) => res.render('index', {page: 'enter-room'}))


route.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)

route.post('/enter-room' , RoomController.enter)

route.post('/question/create/:room' , QuestionController.create )
//Formato que o formulário de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action' , QuestionController.index)


//Formulário Criar sala

    

module.exports = route 