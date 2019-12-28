const yearSeparator = '-';
const genreSeparator = ' & ';

export const getYear = (date) => {
  return date.split(yearSeparator)[0];
}

export const separateGenres = (genres) => {
  return genres.join(genreSeparator);
}