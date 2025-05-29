const url = 'https://potterhead-api.vercel.app/api/movies'
let filmes = document.querySelector('.card-container')

function testeApi(filme){
    return `
        <ol>
        <li>
            <div class="card">
                <img src="${filme.poster}" alt="Harry Potter e a Pedra Filosofal">
                <h2>${filme.title}</h2>
                <p></p>
            </div>
        </li>
        </ol>
    `
}

fetch(url)
    .then((response) => response.json())
    .then(jsonresponse => filmes.innerHTML = jsonresponse.map(testeApi).join(""))
    .catch((error) => console.log(error))
