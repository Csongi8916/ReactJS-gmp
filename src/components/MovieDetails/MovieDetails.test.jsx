import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import MovieDetails from './MovieDetails';

describe('MovieDetails Snapshpt tests:', () => {
  test('Should render correctly', () => {
    const tree = renderer.create(
      <MovieDetails
        title={'Test title'}
        image={'test img'}
        year={'2000-01-01'}
        rate={'5.5'}
        genres={['testg1', 'testg2']}
        runtime={'180'}
        overview={'Test description'}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});