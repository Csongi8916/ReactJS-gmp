import React from 'react';
import renderer from 'react-test-renderer';
import Logo from './Logo';

describe('Logo snapshots', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});