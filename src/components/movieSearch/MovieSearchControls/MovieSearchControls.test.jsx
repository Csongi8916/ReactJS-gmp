import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import MovieSearchControls from './MovieSearchControls';

describe('MovieSearchControls Snapshpt tests:', () => {
  test('Should render correctly MovieCard', () => {
    const tree = renderer.create(<MovieSearchControls />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('MovieSearchControls UI tests:', () => {
  test('Should change search input', () => {
    const wrap = shallow(<MovieSearchControls />);
    const input = wrap.find('.MovSearchControl_Input');
  });
});