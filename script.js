const moviePoster = document.querySelector('#imagem_filme')
const movieTitle = document.querySelector('#title')
const movieDescription = document.querySelector('#description')
const movieScreen = document.querySelector('#info_filme')


const API_KEY = "5acea98e2c04002e9ef5af0f24d8495f"

const fetchMovie = async () => {
    let data = await randomID()
    
    while(data.success != undefined) {
        data = await randomID()
    }
    return data
}

const randomID = async () => {
    let movieId = Math.floor(Math.random() * 1000)
    let movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
    let data = await movie.json()
    return data
}

const renderMovie = async () => {
    let data = await fetchMovie()
    moviePoster.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    movieDescription.innerHTML = data.overview
    movieTitle.innerHTML = data.original_title
    movieScreen.style.display = 'flex'
}