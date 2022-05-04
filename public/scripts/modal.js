export default function Modal(){

    const cancelButton = document.querySelector('.cancel') 
    const modalWrapper =  document.querySelector('.modal-wrapper')
    cancelButton.addEventListener('click', close)

    function open(){ 
        //inserir classe active do modal
        console.log("opennnnn")
        modalWrapper.classList.add("active")
    }
    function close(){
        //remover classe active do modal
        modalWrapper.classList.remove("active")
    } 

    return {    
        open,
        close
    }
}