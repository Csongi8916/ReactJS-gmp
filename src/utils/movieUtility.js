const yearSeparator = '-';
const genreSeparator = ' & ';

export const getYear = (date) => {
  if (date) {
    return date.split(yearSeparator)[0];
  }
  return date;
}

export const separateGenres = (genres) => {
  if (genres && genres.length > 0) {
    return genres.join(genreSeparator);
  }
  return genres;
}