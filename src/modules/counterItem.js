export function countDisplayedShows(displayEpisode) {
    const arr = Array.from(displayEpisode.querySelectorAll('.card'));
    return {
      count: arr.length,
      firstId: parseInt(arr[0].id, 10),
      lastId: parseInt(arr[9].id, 10),
    };
  }
  
  export function countShows(arr) {
    return arr.length;
  }