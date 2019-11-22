import React from 'react';
import renderer from 'react-test-renderer';
import MovieResult from './MovieResult';
import { shallow, mount, render } from 'enzyme';
import { movies } from '../../data/dummy';

describe('MovieResult Snapshpt tests', () => {
  test('Should render correctly MovieResultHeader', () => {
    const tree = renderer.create(<MovieResult isDetailsResult={false} movies={movies} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('MovieResult UI tests', () => {
  test('Should number of movies equal number of MovieCard component ', () => {
    const wrapWithData = mount(<MovieResult isDetailsResult={false} movies={movies} />);
    const wrapWithEmpty = mount(<MovieResult isDetailsResult={true} movies={[]} />);

    let movieCardNum = wrapWithData.find('.MovCard').length;
    expect(movies.length).toEqual(movieCardNum);
    movieCardNum = wrapWithEmpty.find('.MovCard').length;
    expect(0).toEqual(movieCardNum);
  });
});