import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

describe('Footer', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
