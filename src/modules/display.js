import likeShow from './addLikes.js';

const createShowCard = (episode) => {
  const div = document.createElement('div');
  div.classList.add('card');
  div.setAttribute('id', episode.id);
  div.innerHTML = `
    <h2 class="card-title">${episode.name}</h2>
    <img class="card-img-top img" src=${episode.image.medium} alt="">
    <div class="card-body">       
       <p class="card-text">${episode.summary}</p>
       <button type="button" class="btn btn-link btn-comment">Comments</i></button>
       <button type="button"
        class="btn btn-link like-count"><i class="fa-regular fa-heart like-icon"></i></button>
       <span class="likeCount">0</span>
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
};

export default createShowCard;
