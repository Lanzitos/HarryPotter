const url = 'https://potterhead-api.vercel.app/api/movies'
let filmes = document.querySelector('.card-container')
const titulosOriginais = Array.from(document.querySelectorAll('.titulo')).map(t => t.textContent);


function testeApi(filme, i){
  const titulo = titulosOriginais[i]
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
  const isFavorito = favoritos.some(fav => fav.titulo === titulosOriginais)

  return `
        <li>    
        <div class="card">
        <p>
        <button class="estrela"${isFavorito ? 'favorito' : ''}" 
                            style="color: ${isFavorito ? 'yellow' : 'white'}" 
                            data-index="${i}">&#9733;</button></p>
        <img src="${filme.poster}" alt="">
        <h2>${titulosOriginais[i]}</h2>
        </div>
        </li>
        `
}

function salvar(filmeData){
    const estrelas = document.querySelectorAll('.estrela')
    estrelas.forEach((estrela, index) => {
    estrela.addEventListener('click', () => {
    const title = document.querySelectorAll('.titulo')[index].textContent
    
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || []

    const jaFavorito = favoritos.some(f => f.titulo === titulo)

    if (jaFavorito) {
      estrela.classList.remove('favorito')
      estrela.style.color = 'white'
      favoritos = favoritos.filter(f => f.titulo !== title)
    } else {
      estrela.classList.add('favorito')
      estrela.style.color = 'yellow'
      const filme = {...filmeData[index], title}
        favoritos.push(filme)
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
  })
})}        

fetch(url)
.then(response => response.json())
.then(jsonresponse => {
  filmes.innerHTML = jsonresponse.map((filme, i) => testeApi(filme, i)).join("")
  salvar(jsonresponse)
})
.catch((error) => console.log(error))



