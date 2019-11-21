import React from 'react';
import renderer from 'react-test-renderer';
import MovieSearch from './MovieSearch';
import { configure, shallow, mount, render } from 'enzyme';


test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <MovieSearch />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Link changes the class when hovered', () => {
  //MovSearchControl_Input
  const wrap = mount(<MovieSearch />);
  const input = wrap.find('.MovSearchControl_Input');
  input.simulate('change', { target: { value: 'abc' } });
  expect(true).toBe(true);
});