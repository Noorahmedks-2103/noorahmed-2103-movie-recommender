body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: #111;
    color: #eee;
    transition: background-color 0.3s, color 0.3s;
}

body.light {
    background-color: #f9f9f9;
    color: #111;
}

.hero {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(90deg, #111, #222);
}

body.light .hero {
    background: linear-gradient(90deg, #eee, #ddd);
}

.hero h1 {
    margin: 0;
    font-size: 3rem;
}

.hero p {
    margin-top: 0.5rem;
    font-size: 1.2rem;
}

#toggleTheme {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
}

.search-section {
    text-align: center;
    margin: 2rem 0;
    position: relative;
}

#movie-input {
    padding: 0.5rem;
    width: 300px;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
}

#suggestions {
    list-style: none;
    padding: 0;
    margin: 0.5rem auto;
    width: 300px;
    text-align: left;
    background-color: #222;
    border-radius: 5px;
    display: none;
    position: absolute;
    z-index: 10;
}

#suggestions li {
    padding: 0.5rem;
    cursor: pointer;
}

#suggestions li:hover {
    background-color: #555;
}

.movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
    padding: 1rem;
}

.movie-card {
    background-color: #222;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
}

.movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px #ff0000;
}

.movie-card img {
    width: 100%;
    display: block;
}

.movie-info {
    padding: 0.5rem;
}

.movie-info h3 {
    margin: 0.2rem 0;
    font-size: 1.1rem;
}

.movie-info p {
    font-size: 0.9rem;
    margin: 0.2rem 0;
    color: #f0f0f0;
}

.rating {
    color: gold;
    font-weight: bold;
}
