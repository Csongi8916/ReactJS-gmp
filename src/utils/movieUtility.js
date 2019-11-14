export const getYear = (date) => {
  return date.split('-')[0];
}

export const separateGenres = (genres) => {
  return genres.join(' & ');
}