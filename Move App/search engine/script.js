//navbar function
function toggleMenu() {
  var menu = document.getElementById('navbarMenu');
  menu.classList.toggle('show');
  var container = document.querySelector('.container'); // Add this line
  container.style.transform = container.style.transform === 'translateY(200px)' ? 'translateY(0)' : 'translateY(200px)'; // Add this line
}

// Client-side JavaScript
function searchMovies() {
    const genre = document.getElementById('genre').value;
    const year = parseInt(document.getElementById('year').value);
    const rating = parseFloat(document.getElementById('rating').value);
  
    fetch('/api/movies/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ genre, year, rating }),
    })
    .then(response => response.json())
    .then(data => displayResults(data))
    .catch(error => console.error('Error:', error));
  }
  
  function displayResults(movies) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    if (movies.length === 0) {
      resultsDiv.innerHTML = '<p>No movies found.</p>';
      return;
    }
  
    const ul = document.createElement('ul');
    movies.forEach(movie => {
      const li = document.createElement('li');
      li.textContent = `${movie.title} (${movie.year}) - ${movie.rating}`;
      ul.appendChild(li);
    });
    resultsDiv.appendChild(ul);
  }
  
