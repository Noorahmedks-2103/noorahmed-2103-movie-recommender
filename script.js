// DOM Elements
const moviesGrid = document.getElementById("moviesGrid");
const searchInput = document.getElementById("searchInput");
const toggleThemeBtn = document.getElementById("toggleTheme");
const suggestionsList = document.getElementById("suggestions");

// Safety checks
if (!moviesGrid || !searchInput || !toggleThemeBtn || !suggestionsList) {
  console.error("Required DOM elements missing!");
}

// Render movies
function renderMovies(list) {
  moviesGrid.innerHTML = "";
  if (list.length === 0) {
    moviesGrid.innerHTML = "<p>No movies found.</p>";
    return;
  }
  list.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
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

// Dark/Light toggle
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
});

// Load saved theme
if (localStorage.getItem("theme") === "light") document.body.classList.add("light");

// Search and autocomplete
searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase().trim();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(term));
  renderMovies(filtered);

  // Show suggestions
  const suggestions = filtered.slice(0, 5);
  if (suggestions.length > 0 && term !== "") {
    suggestionsList.style.display = "block";
    suggestionsList.innerHTML = suggestions.map(m => `<li>${m.title}</li>`).join('');
  } else {
    suggestionsList.style.display = "none";
    suggestionsList.innerHTML = "";
  }
});

// Click on suggestion
suggestionsList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    searchInput.value = e.target.textContent;
    searchInput.dispatchEvent(new Event("input")); // Trigger search
    suggestionsList.style.display = "none";
  }
});

// Hide suggestions on click outside
document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
    suggestionsList.style.display = "none";
  }
});
