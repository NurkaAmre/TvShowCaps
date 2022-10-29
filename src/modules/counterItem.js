export const countDisplayedShows = (displayEpisode) => {
  const arr = Array.from(displayEpisode.querySelectorAll('.card'));
  return {
    count: arr.length,
  };
};

export const countShows = (arr) => arr.length;