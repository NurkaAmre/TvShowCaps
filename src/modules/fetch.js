export const getShowsData = async (url) => {
    const result = await fetch(url);
    return result;
  };