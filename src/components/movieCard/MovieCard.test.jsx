import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import MovieCard from './MovieCard';

describe('Snapshpt tests', () => {
  test('Should render correctly MovieCard', () => {
    const tree = renderer.create(
      <MovieCard
        key={1}
        title={'Black Panther'}
        image={'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg'}
        year={'2018-02-13'}
        genres={[
          "Action",
          "Adventure",
          "Fantasy",
          "Science Fiction"
        ]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});