import './style.css';

const API = 'https://api.tvmaze.com/shows/1/episodes';

const displayEpisode = document.querySelector('.episode');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const pageNum = document.querySelector('.page-numbers');

const getData = async (API) => {
  const result = await fetch(API);
  return result;
};

function displayCards(episode) {
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <h2 class="card-title">${episode.name}</h2>
             <img class="card-img-top img" src=${episode.image.medium} alt="Card image cap">
             <div class="card-body">       
                <p class="card-text">${episode.summary}</p>
                <button type="button" class="btn btn-link btn-comment">Comments</i></button>
                <button type="button" class="btn btn-link btn-like"><i class="fa-solid fa-heart"></i></button>
                </div>`;

  return div;
}

const displayShows = (shows, pageNumber) => {
  shows.splice(pageNumber * 10 - 10, 9).forEach((show) => {
    const div = displayCards(show);
    displayEpisode.append(div);
  });
};

function loadNext(pageNumber) {
  if (pageNumber + 1 < 6) {
    pageNum.innerHTML = pageNumber + 1;
    displayEpisode.innerHTML = '';
    getData(API)
      .then((response) => response.json())
      .then((json) => displayShows(json, pageNumber + 1));
  }
}

function loadPrevious(pageNumber) {
  if (pageNumber - 1 > 0) {
    pageNum.innerHTML = pageNumber - 1;
    displayEpisode.innerHTML = '';
    getData(API)
      .then((response) => response.json())
      .then((json) => displayShows(json, pageNumber - 1));
  }
}

previous.addEventListener('click', () => {
  loadPrevious(parseInt(pageNum.innerHTML, 10));
});

next.addEventListener('click', () => {
  loadNext(parseInt(pageNum.innerHTML, 10));
});

getData(API)
  .then((response) => response.json())
  .then((json) => displayShows(json, 1));
