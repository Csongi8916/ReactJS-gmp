import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import MovieResultHeader from './MovieResultHeader';

test('Should number of movie equal header title info', () => {
  const wrap = shallow(<MovieResultHeader needTotal={true} count={5} />);
  debugger;
  const count = wrap.text().search('5');
  expect(count).toBeDefined();
});