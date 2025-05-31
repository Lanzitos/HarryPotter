const url = 'https://potterhead-api.vercel.app/api/movies'
let filmes = document.querySelector('.card-container')

function testeApi(filme){
    return `
        <li>    
        <div class="card">
        <p><button class="estrela" onclick="salvar()">&#9733;
        </button></p>
        <img src="${filme.poster}" alt="${filme.title}">
        <h2>${filme.title}</h2>
        </div>
        </li>
        `
}

function salvar(){
    const estrelas = document.querySelectorAll('.estrela')
    estrelas.forEach(estrelas => {
    
    estrelas.addEventListener('click', () => {
    const estaFavorito = estrelas.classList.contains('favorito');
    if (estaFavorito) {
      estrelas.classList.remove('favorito')
      estrelas.style.color = 'yellow'
    } else {
      estrelas.classList.add('favorito')
      estrelas.style.color = 'white'
    }
  })
}

)}        

fetch(url)
.then((response) => response.json())
.then(jsonresponse => filmes.innerHTML = jsonresponse.map(testeApi).join(""))
.catch((error) => console.log(error))



