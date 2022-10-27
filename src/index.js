import './style.css';


const API = 'https://api.tvmaze.com/shows/1/episodes';
const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OpXkQhwbfD4wnLSWy6wV/likes';

const displayEpisode = document.querySelector('.episode');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const pageNum = document.querySelector('.page-numbers');
const body = document.querySelector('body');

let showsArray = [];

const getData = async (API) => {
  const result = await fetch(API);
  return result;
};

const likeShow = async (id, likesNumber, likesBtn) => {
  await fetch(likesAPI, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    likesNumber.innerHTML = parseInt(likesNumber.innerHTML, 10) + 1;
    const i = likesBtn.querySelector('i');
    i.classList.remove('fa-regular');
    i.classList.add('fa-solid');
  });
};


function createShowCard(episode) {
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <h2 class="card-title">${episode.name}</h2>
  <img class="card-img-top img" src=${episode.image.medium} alt="">
  <div class="card-body">       
     <p class="card-text">${episode.summary}</p>
     <button type="button" class="btn btn-link btn-comment">Comments</i></button>
     <div class="likes">
     <button type="button"
      class="btn btn-link like-count"><i class="fa-regular fa-heart like-icon"></i></button>
     <span class="likeCount">0</span>
     </div>
     </div>
  `;
  const likesNumber = div.querySelector('.likeCount');
  if ('likes' in episode) {
    likesNumber.innerHTML = episode.likes;
  }

  const likeBtn = div.querySelector('.like-count');
  likeBtn.addEventListener('click', () => {
    likeShow(episode.id, likesNumber, likeBtn);
  });


  return div;
}

const displayShows = (shows, pageNumber) => {
  shows.slice(pageNumber * 10 - 10, pageNumber * 9).forEach((show) => {
    const div = createShowCard(show);
    displayEpisode.append(div);
  });
};

function loadNext(pageNumber, shows) {
  const nextPage = pageNumber + 1;
  if (nextPage < 5 ) {
    pageNum.innerHTML = nextPage;
    displayEpisode.innerHTML = '';
    getData(API)
      .then((response) => response.json())
      .then((json) => displayShows(json, pageNumber + 1));
    displayShows(shows, nextPage);
  }
}

function loadPrevious(pageNumber, shows) {
  const previousPage = pageNumber - 1;
  if (previousPage > 0) {
    pageNum.innerHTML = previous;
    displayEpisode.innerHTML = '';
    getData(API)
      .then((response) => response.json())
      .then((json) => displayShows(json, pageNumber - 1));
    displayShows(shows, previousPage);
  }
}

previous.addEventListener('click', () => {
  loadPrevious(parseInt(pageNum.innerHTML, 10), showsArray);
});

next.addEventListener('click', () => {
  loadNext(parseInt(pageNum.innerHTML, 10), showsArray);
});

getData(API)
  .then((response) => response.json())
  .then((json) => displayShows(json, 1));
getData(API)
  .then((response1) => response1.json())
  .then((shows) => {
    showsArray = shows;
    getData(likesAPI)
      .then((response) => response.json())
      .then((likes) => {
        likes.forEach((item, i) => {
          showsArray[i].likes = item.likes;
        });
        displayShows(showsArray, 1);
      });
  });