import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow, mount, render } from 'enzyme';
import NxrToogleButton from './NxrToogleButton';

test('NxrToogleButton do not change the class when hovered', () => {
  const component = renderer.create(
    <NxrToogleButton title="Sort by" firstTitle="released date" secondTitle="raiting" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[1].children[0].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('works', () => {
  const wrap = shallow(<NxrToogleButton title="test" />);
  const button = wrap.find('.NxrToogle_Btn').at(1);
  expect(button.hasClass('NxrToogle_Btn-Inactive')).toBe(true);
  button.props().onClick();
  expect(button.hasClass('NxrToogle_Btn-Active')).toBe(true);
});
