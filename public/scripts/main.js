
import  Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//Pegar todos os botões com a classe check

const checkButtons =  document.querySelectorAll('.actions a.check')
const deleteButtons = document.querySelectorAll('.actions a.delete')
//const buttonmModal = document.querySelectorAll('')
checkButtons.forEach( button => {
    
    //adicionar a escuta
    
    button.addEventListener('click' , handleClick) 
})

deleteButtons.forEach( button => {
  
    button.addEventListener('click' , (event) => handleClick(event, false))  
})

function handleClick(event , check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"

    const form  = document.querySelector('.modal form')
    const slug = check ? "check" : "delete"
    const questionID = event.target.dataset.id
    const roomId = document.querySelector('#room-id').dataset.id

    form.setAttribute("action" , `/question/${roomId}/${questionID}/${slug}`)
    

    modalTitle.innerHTML = `${text} esta pergunta` 
    modalDescription.innerHTML =  `Tem certeza  que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = ` Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    modal.open()
}








