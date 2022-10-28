export function countDisplayedShows(displayEpisode) {
  const arr = Array.from(displayEpisode.querySelectorAll('.card'));
  return {
    count: arr.length,
  };
}

export function countShows(arr) {
  return arr.length;
}