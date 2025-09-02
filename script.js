const movies = [
  {title: "The Shawshank Redemption", poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", rating: 9.3, review: "A masterpiece about hope and friendship."},
  {title: "The Godfather", poster: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg", rating: 9.2, review: "Iconic mafia saga with stellar performances."},
  {title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", rating: 9.0, review: "Dark, thrilling, Heath Ledger is unforgettable."},
  {title: "Pulp Fiction", poster: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg", rating: 8.9, review: "Quentin Tarantino's crime classic."},
  {title: "Inception", poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", rating: 8.8, review: "Mind-bending thriller with stunning visuals."},
  {title: "Forrest Gump", poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg", rating: 8.8, review: "Heartwarming journey through history and life."},
  {title: "Fight Club", poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg", rating: 8.8, review: "Psychological chaos with style."},
  {title: "The Matrix", poster: "https://image.tmdb.org/t/p/w500/aoiiG0WfL4r3cU7l4h0v3KJQpGy.jpg", rating: 8.7, review: "Groundbreaking sci-fi action."},
  {title: "The Empire Strikes Back", poster: "https://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg", rating: 8.7, review: "Epic space opera continues."},
  {title: "The Godfather: Part II", poster: "https://image.tmdb.org/t/p/w500/amvmeQWheahG3StKwIE1f7jRnkZ.jpg", rating: 9.0, review: "Mafia legend continues."},
  // Add more up to 50 movies in the same format
];

// Render movies
const moviesGrid = document.getElementById("moviesGrid");

function renderMovies(list) {
  moviesGrid.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>⭐ ${movie.rating}</p>
      <p>${movie.review}</p>
    `;
    moviesGrid.appendChild(card);
  });
}

renderMovies(movies);

// Dark/Light toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Simple search
document.getElementById("searchInput").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(searchTerm));
  renderMovies(filtered);
});
