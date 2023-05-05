// console.log('funguju!');

import { Movie } from './Movie/index.js';

// 1. FILMY
const renderFilms = (items) => {
    const movieListElm = document.querySelector('.movie-list');

    movieListElm.innerHTML = items
      .map(oneFilm => Movie(oneFilm))
      .join('');
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then((response) => response.json())
    .then((data) =>
        //console.log(data);
        renderFilms(data));


// 2. FILMY PODLE ŽÁNRŮ

const capitalize = (text) => {
  return text[0].toUpperCase() + text.slice(1);
}

const renderOptions = (items) => {
  const selectGenreElm = document.querySelector('#select-genre');

  selectGenreElm.innerHTML = items
  .map(oneOption =>
    `<option value="${oneOption}">${capitalize(oneOption)}</option>`
  )
  .join('');
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/genres')
  .then((response) =>
    response.json())
  .then((data) =>
    renderOptions(data));

const filtersElm = document.querySelector('.filters');

const zobraz = (event) => {
  event.preventDefault();
  //console.log(event);
  const text = document.querySelector('#select-genre').value;
  console.log(text);

  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies?genre=${text}`)
  .then((response) => response.json())
  .then((data) => {
      //console.log(data);
      renderFilms(data)
  })
}

filtersElm.addEventListener('submit', zobraz);