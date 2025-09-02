const movieInput = document.getElementById('movieInput');
const searchForm = document.getElementById('searchForm');
const movieGrid = document.getElementById('movieGrid');
const recommendTitle = document.getElementById('recommendTitle');
const suggestionsList = document.getElementById('suggestions');
const toggleBtn = document.getElementById('toggleTheme');

// Dark/Light toggle
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

// Show suggestions while typing
movieInput.addEventListener('input', () => {
  const query = movieInput.value.toLowerCase();
  suggestionsList.innerHTML = '';
  if(query) {
    const matched = movies.filter(m => m.title.toLowerCase().includes(query));
    matched.forEach(m => {
      const li = document.createElement('li');
      li.textContent = m.title;
      li.addEventListener('click', () => {
        movieInput.value = m.title;
        suggestionsList.innerHTML = '';
      });
      suggestionsList.appendChild(li);
    });
  }
});

// Handle search & recommend
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = movieInput.value.toLowerCase();
  const selectedMovie = movies.find(m => m.title.toLowerCase() === query);

  if(!selectedMovie) {
    alert('Movie not found!');
    return;
  }

  recommendTitle.textContent = `Because you liked "${selectedMovie.title}", you might also like:`;
  movieGrid.innerHTML = '';

  // Recommend based on first letter similarity
  const recommendations = movies.filter(m => m.title !== selectedMovie.title && m.title[0] === selectedMovie.title[0]);

  recommendations.forEach(m => {
    const card = document.createElement('li');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${m.poster}" alt="${m.title}">
      <h3>${m.title}</h3>
      <p>⭐ ${m.rating}</p>
      <p>${m.review}</p>
    `;
    movieGrid.appendChild(card);
  });
});
