import './style.css';
// import displayCards from './modules/getPostAPI';

const showEpisodes = [
    {
      id: 1,
      name: 'Pilot',
      url: 'https://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot',
      season: 1,
      number: 1,
      rating: {
        average: 7.7,
      },
      image: {
        medium:"https://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
        original:"https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg",
      },
      summary:"<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
      _links: {
        self:{ 
            href:"https://api.tvmaze.com/episodes/1"}
        }
    },

  {
      id: 2,
      name: 'The Fire',
      url: 'https://www.tvmaze.com/episodes/2/under-the-dome-1x02-the-fire',
      season: 1,
      number: 2,
      rating: {
        average: 7.3,
      },
      image: {
        medium:"https://static.tvmaze.com/uploads/images/medium_landscape/1/4389.jpg",
        original:"https://static.tvmaze.com/uploads/images/original_untouched/1/4389.jpg",
      },
      summary:"<p>While the residents of Chester's Mill face the uncertainty of life in the dome, panic is heightened when a house goes up in flames and their fire department is outside of the dome.</p>",
      _links: {
        self: { 
            href: "https://api.tvmaze.com/episodes/2"}
        }
    },

    {
        id: 3,
        name: 'Manhunt',
        url: 'https://www.tvmaze.com/episodes/3/under-the-dome-1x03-manhunt',
        season: 1,
        number: 3,
        rating: {
          average: 7.1,
        },
        image: {
          medium:"https://static.tvmaze.com/uploads/images/medium_landscape/1/4390.jpg",
          original:"https://static.tvmaze.com/uploads/images/original_untouched/1/4390.jpg",
        },
        summary:"<p>When a former deputy goes rogue, Big Jim recruits Barbie to join the manhunt to keep the town safe. Meanwhile, Junior is determined to escape the dome by going underground.</p>",
        _links: {
          self: { 
              href: "https://api.tvmaze.com/episodes/3"}
          }
      },

      {
        id: 4,
        name: 'Outbreak',
        url: 'https://www.tvmaze.com/episodes/4/under-the-dome-1x04-outbreak',
        season: 1,
        number: 4,
        rating: {
          average: 7.3,
        },
        image: {
          medium:"https://static.tvmaze.com/uploads/images/medium_landscape/1/4391.jpg",
          original:"https://static.tvmaze.com/uploads/images/original_untouched/1/4391.jpg",
        },
        summary:"<p>The people of Chester's Mill fall into a state of panic as an outbreak of meningitis strikes their community, threatening their already depleted medical supplies. Meanwhile, Julia continues to search for answers into her husband's disappearance.</p>",
        _links: {
          self: { 
              href: "https://api.tvmaze.com/episodes/4"}
          }
      }]

      function createShowCard(episode) {
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
        
        const episodeList = document.querySelector('.cards');
        episodeList.append(createShowCard(showEpisodes[0]));
        episodeList.append(createShowCard(showEpisodes[1]));
        episodeList.append(createShowCard(showEpisodes[2]));
        episodeList.append(createShowCard(showEpisodes[3]));
;