const tvAPI = 'https://www.tvmaze.com/api'

// get data from API

export const getValue = async () => {
    const response = await fetch(tvAPI).then((res) => res.json());
    console.log('response')
    return response.result;
  };
  
  // const displayCards = async () => {
  //   const results = await getValue();
  //   const movieList = document.querySelector('.movie-list');
  //   movieList.innerHTML = '';
  //   for (let i = 0; i < results.length; i += 1) {
  //     const div = document.createElement('div');
  //     div.innerHTML = `<img class="card-img-top" src="./assets/20th-Century-Boy-and-Girl1-e1510135554891.jpg" alt="Card image cap">
  //     <div class="card-body">
  //       <h5 class="card-title">Card title</h5>
  //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //       <button type="button" class="btn btn-link">Comment</i></button>
  //       <button type="button" class="btn btn-link"><i class="fa-solid fa-heart"></i></button>
  //     </div>`;
  //     movieList.appendChild(div);
  //   }
  // };
  
  // export default displayCards;