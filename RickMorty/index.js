let url = 'https://rickandmortyapi.com/api/character'



async function nextLink(){
    url = await fetch(url)
    .then((response) => response.json())
    .then(link => link.info.next)
    getLista(url)
}

async function prevLink(){
    url = await fetch(url)
    .then((response) => response.json())
    .then(link => link.info.prev)
    getLista(url)
}

let nextButton = document.querySelector(".next")
nextButton.addEventListener("click", nextLink)

let prevButton = document.querySelector('.prev')
prevButton.addEventListener("click", prevLink)

async function getLista(url){
    await fetch(url)
    .then((response) => response.json())
    .then((element) => {
        let resultado = element.results
        return resultado
    })
    .then((listaPersonagens) =>{
        window.scrollTo(0,0);
        let s = document.querySelector('.secao')
        s.removeChild(document.querySelector('.personagens'))
        let div = document.createElement('div')
        div.setAttribute('class', 'personagens')
        s.appendChild(div)
        return listaPersonagens.map((element)=> {
            let ul = document.createElement('ul')
            ul.setAttribute('class','item')
            let img = document.createElement('img')
            img.setAttribute('src', `${element.image}`)
            let li = document.createElement('li')
            li.innerText = `Nome: ${element.name}\nSituação: ${element.status== 'Alive' ? 'Vivo' : 'Morto'}\n Espécie: ${element.species}`
            ul.appendChild(img)
            ul.appendChild(li)
            div.appendChild(ul)
        })
    })
    .catch(error => {
        console.log('Deu bosta ' + error)
    })
}

getLista(url)


