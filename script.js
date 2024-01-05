const moviePoster = document.querySelector('#imagem_filme')
const movieTitle = document.querySelector('#title')
const movieDescription = document.querySelector('#description')


const API_KEY = "5acea98e2c04002e9ef5af0f24d8495f"

const fetchMovie = async (movieId) => {
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
    let data = await movie.json()
    console.log(data)
    return data
}

const renderMovie = async () => {
    let data = await fetchMovie('1984')
    moviePoster.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    movieDescription.innerHTML = data.overview
    
}
