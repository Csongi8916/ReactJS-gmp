import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import MovieResultHeader from './MovieResultHeader';

describe('MovieResultHeader Snapshpt tests', () => {
  test('Should render correctly MovieResultHeader', () => {
    const tree = renderer.create(<MovieResultHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('MovieResultHeader UI tests', () => {
  it('Should number of movie equal header title info', () => {
    const wrap = shallow(<MovieResultHeader needTotal={true} count={5} />);
    const count = wrap.text().search('5');
    expect(count).toBeDefined();
  });
});
