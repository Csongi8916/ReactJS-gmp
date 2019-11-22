import { getYear, separateGenres } from './movieUtility';

describe('Movie Utility tests', () => {
  test('Should get year from a date string', () => {
    const firstTestDate = getYear('2018-02-13');
    const secondTestDate = getYear('2020-12-12');
    const thirdTestDate = getYear('1970-1-1');
    expect(firstTestDate).toBe('2018');
    expect(secondTestDate).toBe('2020');
    expect(thirdTestDate).toBe('1970');
  });

  test('Should join genres with & separator', () => {
    const testGenres = [
      'Action',
      'Adventure',
      'Fantasy',
      'Science Fiction'
    ];

    const successfulResult = 'Action & Adventure & Fantasy & Science Fiction';
    const testResult = separateGenres(testGenres);
    expect(testResult).toEqual(successfulResult);
  });
});