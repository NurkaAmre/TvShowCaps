import './style.css';


// const API = 'https://api.tvmaze.com/shows/1/episodes';
// const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OpXkQhwbfD4wnLSWy6wV/likes';

const displayEpisode = document.querySelector('.episode');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const pageNum = document.querySelector('.page-numbers');

let showArray = [];

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
                <div class="like">
                <button type="button" onclick="count()"
                 class="btn btn-link btn-like"><i class="fa-solid fa-heart"></i></button>
                <span class="likeCount">0</span>
                </div>
                </div>`;

                const likesNumber = div.querySelector('.likeCount');
                if ('like' in episode) {
                  likesNumber.innerHTML = episode.like;
  }
     return div;
}

const displayShows = (shows, pageNumber) => {
  shows.slice(pageNumber * 10 - 10, 9).forEach((show) => {
    const div = displayCards(show);
    displayEpisode.append(div);
  });
};

function loadNext(pageNumber, shows) {
    const nextPage = pageNumber + 1;
  if (pageNumber + 1 < 6) {
    pageNum.innerHTML = nextPage;
    displayEpisode.innerHTML = '';
    displayShows(shows, nextPage);
  }
}

function loadPrevious(pageNumber, shows) {
    const previousPage = pageNumber - 1;
  if (pageNumber > 0) {
    pageNum.innerHTML = previous;
    displayEpisode.innerHTML = '';
    displayShows(shows, previousPage);
  }
}

previous.addEventListener('click', () => {
  loadPrevious(parseInt(pageNum.innerHTML, 10), showArray);
});

next.addEventListener('click', () => {
  loadNext(parseInt(pageNum.innerHTML, 10), showArray);
});



  getData(API)
  .then((response1) => response1.json())
  .then((shows) => {
    showArray = shows;
    getData(likesAPI)
      .then((response2) => response2.json())
      .then((like) => {
        console.log(like)
        like.forEach((item, i) => {
          showArray[i].like = item.like;
        });
        displayShows(showArray, 1);
      });
  });


//   const createApp = async () => {
//     const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//       method: 'POST',
//       body: JSON.stringify({
//         name: 'My App',
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//     const data = await response.text();
//     console.log(data);
//  };

// //  createApp()