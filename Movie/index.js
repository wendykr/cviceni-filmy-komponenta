export const Movie = (props) => {

    const {posterUrl, title, year, url} = props;
  
    return `
      <li class="movie-detail">
        <div class="movie-poster">
          <img 
            src="${posterUrl}"
            alt="${title}"
          />
        </div>
        <div class="movie-info">
          <h2 class="movie-title">${title}</h2>
          <div class="movie-year">${year}</div>
          <div class="movie-link">
          <a href="${url}" target="_blank">Odkaz na CSFD</a>
          </div>
        </div>
      </li>
    `
  }