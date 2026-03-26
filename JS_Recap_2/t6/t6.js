const movieCount = Number(prompt("How many movies do you want to rate?"));
const movies = [];

for (let i = 1; i <= movieCount; i++) {
  const title = prompt(`Enter the title of the movie ${i}`);
  const rating = Number(prompt(`Enter the rating for "${title}" (1-5):`));

  movies.push({
    title: title,
    rating: rating,
  });
}

movies.sort((a, b) => b.rating - a.rating);

const bestMovie = movies[0];

let html = "<h2>Sorted movies (highest to lowest rating)</h2><ul>";

for (const movie of movies) {
  html += `<li>${movie.title} - Rating: ${movie.rating}</li>`;
}

html += "</ul>";

html += `<h2>Highest rated movie</h2>
<p><strong>${bestMovie.title}</strong> - Rating: ${bestMovie.rating}</p>`;

document.getElementById("output").innerHTML = html;
