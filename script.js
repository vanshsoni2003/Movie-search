let title = document.querySelector(".movie-title");
const fetchmovie = async (title) => {
  const resp = await fetch(
    `http://www.omdbapi.com/?s=${title}&apikey=7e10f733`
  );
  const data = await resp.json();
  return data;
};
// fetchmovie();

const searchbttitle = async () => {
  const title = document.querySelector(".movie-title").value.trim();
  if (!title) {
    alert("Please enter a movie title");
    return;
  }
  displayMovies(await fetchmovie(title));
};
function displayMovies(data) {
  const movieResult = document.querySelector("#movieResult");
  movieResult.innerHTML = "";
  if (data.Response === "False") {
    movieResult.innerHTML = `<div class='alert alert-danger'>No movies Found 😞 </div>`;
    return;
  }

  data.Search.forEach((movie) => {
    const movieResult = document.querySelector("#movieResult");
    const movieDiv = document.createElement("div");
    movieDiv.style.display = "flex";
    movieResult.classList.add("movie");
    movieDiv.innerHTML = `
      <div class='card movie-card'>
         <img src='${movie.Poster}' alt='${movie.Title}'>
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      
      </div>
        `;
    movieResult.appendChild(movieDiv);
  });
}
