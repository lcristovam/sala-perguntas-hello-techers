const Database = require('../db/config')



module.exports = {

    
    async index(req, res){
        const roomId = req.params.room;
        const questionID = req.params.question;
        const action = req.params.action;
        const password = req.body.password

    
        const db = await Database()

        
        //Verificar se a senha está correta
        
        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId} `)

        if(verifyRoom.pass  == password ){
            if(action == "delete"){
            
                await db.run(`DELETE FROM questions WHERE id = ${questionID}`
                )
            }else if (action == "check"){
                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionID}`)
            }   
            res.redirect(`/room/${roomId}`)
        }else{
            console.log(`room = ${roomId}, questionID = ${questionID} , action =  ${action} , password = ${password}`)
            res.render('passincorrect' , {roomId: roomId})
        }

        
        

     
   
    },


    async create(req, res){
        const db = await Database()
        const question = req.body.question
        const roomId = req.params.room

        await db.run(`INSERT INTO questions (
            
            title,
            room,
            read
            ) VALUES ( 
            
            "${question}",
            ${roomId},
            0    
            )`)

        res.redirect(`/room/${roomId}`)
    }   
}