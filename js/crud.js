const url = 'https://potterhead-api.vercel.app/api/movies'
let filmes = document.querySelector('.card-container')
const titulosOriginais = Array.from(document.querySelectorAll('.titulo')).map(t => t.textContent);


function testeApi(filme, i){
  const titulo = document.querySelectorAll('.titulo')
  document.querySelectorAll('.titulo').innerHTML
  return `
        <li>    
        <div class="card">
        <p><button class="estrela" onclick="salvar()">&#9733;
        </button></p>
        <img src="${filme.poster}" alt="">
        <h2>${titulosOriginais[i]}</h2>
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
})}        

fetch(url)
.then(response => response.json())
.then(jsonresponse => {
  filmes.innerHTML = jsonresponse.map((filme, i) => testeApi(filme, i)).join("")
  salvar()
})
.catch((error) => console.log(error))



