const moviesGrid = document.getElementById('movies-grid');
const movieInput = document.getElementById('movie-input');
const suggestionsList = document.getElementById('suggestions');

// Fetch all movies from backend
async function fetchMovies(query = '') {
    try {
        const response = await fetch(`/api/movies?q=${query}`);
        const movies = await response.json();
        displayMovies(movies);
        displaySuggestions(movies, query);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

// Display movies in the grid
function displayMovies(movies) {
    moviesGrid.innerHTML = '';
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="info">
                <h3>${movie.title}</h3>
                <p>⭐ ${movie.rating}</p>
                <p>${movie.review}</p>
            </div>
        `;
        moviesGrid.appendChild(card);
    });
}

// Display autocomplete suggestions
function displaySuggestions(movies, query) {
    suggestionsList.innerHTML = '';
    if (query.length === 0) return;
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    filtered.slice(0, 5).forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie.title;
        li.addEventListener('click', () => {
            movieInput.value = movie.title;
            fetchMovies(movie.title);
            suggestionsList.innerHTML = '';
        });
        suggestionsList.appendChild(li);
    });
}

// Search as user types
movieInput.addEventListener('input', () => {
    fetchMovies(movieInput.value);
});

// Initial fetch: display all movies
fetchMovies();

