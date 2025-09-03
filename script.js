// =========================
// Movie Data
// =========================
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
  // Add more movies as needed
];

// =========================
// DOM Elements
// =========================
const moviesGrid = document.getElementById("moviesGrid");
const searchInput = document.getElementById("searchInput");
const toggleThemeBtn = document.getElementById("toggleTheme");

// Safety check
if (!moviesGrid) throw new Error("No element with id 'moviesGrid' found in HTML.");
if (!searchInput) throw new Error("No element with id 'searchInput' found in HTML.");
if (!toggleThemeBtn) throw new Error("No element with id 'toggleTheme' found in HTML.");

// =========================
// Render Movies Function
// =========================
function renderMovies(list) {
  moviesGrid.innerHTML = "";
  
  if (list.length === 0) {
    moviesGrid.innerHTML = "<p>No movies found.</p>";
    return;
  }

  list.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    
    // Escape HTML to prevent XSS
    const safeTitle = movie.title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeReview = movie.review.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    card.innerHTML = `
      <img src="${movie.poster}" alt="${safeTitle}" onerror="this.src='https://via.placeholder.com/200x300?text=No+Image'">
      <h3>${safeTitle}</h3>
      <p>⭐ ${movie.rating}</p>
      <p>${safeReview}</p>
    `;
    moviesGrid.appendChild(card);
  });
}

// Initial render
renderMovies(movies);

// =========================
// Dark/Light Theme Toggle
// =========================
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // Optional: save preference
  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

// Load theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") document.body.classList.add("light");

// =========================
// Search Function
// =========================
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(searchTerm));
  renderMovies(filtered);
});
