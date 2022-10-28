import './style.css';
import { countShows } from './modules/counterItem.js';
import createShowCard from './modules/display.js';

const API = 'https://api.tvmaze.com/shows/1/episodes';
const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OpXkQhwbfD4wnLSWy6wV/likes';

const displayEpisode = document.querySelector('.episode');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const pageNum = document.querySelector('.page-numbers');
const showsHeader = document.querySelector('.shows-header');
const body = document.querySelector('body');

let showsArray = [];

const getData = async (API) => {
  const result = await fetch(API);
  return result;
};

const displayShows = (shows, pageNumber, heading) => {
  shows.slice(pageNumber * 10 - 10, pageNumber * 10).forEach((show) => {
    const div = createShowCard(show);
    displayEpisode.append(div);
  });

  const showsCount = countShows(showsArray);
  heading.innerHTML = `Episodes: ${showsCount}`;
};

function loadNext(pageNumber, shows, showsHeader) {
  const nextPage = pageNumber + 1;
  if (nextPage < 5) {
    pageNum.innerHTML = nextPage;
    displayEpisode.innerHTML = '';
    getData(API)
      .then((response) => response.json())
      .then((json) => displayShows(json, pageNumber + 1));
    displayShows(shows, nextPage, showsHeader);
  }
}

function loadPrevious(pageNumber, shows, showsHeader) {
  const previousPage = pageNumber - 1;
  if (previousPage > 0) {
    pageNum.innerHTML = previousPage;
    displayEpisode.innerHTML = '';
    getData(API)
      .then((response) => response.json())
      .then((json) => displayShows(json, pageNumber - 1));
    displayShows(shows, previousPage, showsHeader);
  }
}

previous.addEventListener('click', () => {
  loadPrevious(parseInt(pageNum.innerHTML, 10), showsArray, showsHeader, pageNum,
    displayEpisode, body, likesAPI);
});

next.addEventListener('click', () => {
  loadNext(parseInt(pageNum.innerHTML, 10), showsArray, showsHeader, pageNum,
    displayEpisode, body, likesAPI);
});

getData(API)
  .then((response1) => response1.json())
  .then((shows) => {
    showsArray = shows;
    getData(likesAPI)
      .then((response) => response.json())
      .then((likes) => {
        likes.forEach((like) => {
          showsArray.forEach((show) => {
            if (show.id === like.item_id) show.likes = like.likes;
          });
        });
        displayShows(showsArray, 1, showsHeader, pageNum, displayEpisode, body, likesAPI);
      });
  });
