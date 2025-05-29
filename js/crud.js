const url = 'https://potterhead-api.vercel.app/api/movies'
let filmes = document.querySelector('.card-container')

function testeApi(filme){
    return `
        <li>
            <div class="card"><p onclick="filmeFavorito()"><button class="estrela">&#9733;</button></p>
                <img src="${filme.poster}" alt="">
                <h2>${filme.title}</h2>
                <p></p>
            </div>
        </li>
    `
}

fetch(url)
    .then((response) => response.json())
    .then(jsonresponse => filmes.innerHTML = jsonresponse.map(testeApi).join(""))
    .catch((error) => console.log(error))
