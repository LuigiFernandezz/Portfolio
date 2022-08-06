function addTarefa(){
    let newTask = document.createElement('li')
    let tarefa = document.querySelector("input[name='entrada']").value
    newTask.innerText = tarefa

    let lista = document.getElementById("tarefas")
    lista.appendChild(newTask)
}

function createRemoveButton(){
    lista = document.querySelectorAll('li')

    for(let i=0; i<lista.length; i++){
        let button = document.createElement('button')
        button.innerText = 'X'
        button.style.backgroundColor = 'black'
        button.style.color ='white'
        button.style.cursor ='pointer'
        button.style.borderRadius = '50%'
        button.style.marginLeft = '8px'
        lista[i].appendChild(button)
        button.setAttribute('onclick', 'removeTask(this)')
    }
    
    let btn1 = document.getElementById('delete-button')
    btn1.setAttribute('disabled', 'disabled')
    let btn2 = document.getElementById('add-button')
    btn2.setAttribute('disabled', 'disabled')

    
}

function removeTask(btn){
    let lista = document.getElementById("tarefas")
    lista.removeChild(btn.parentNode)
}

