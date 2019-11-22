import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow, mount, render } from 'enzyme';
import NxrToogleButton from './NxrToogleButton';
import { MySpy } from '../../../spy';

const values = ['test value 1', 'test value 2'];
const comp = <NxrToogleButton title="Search by" firstTitle={values[0]} secondTitle={values[1]} />
const tree = renderer.create(comp).toJSON();
const wrap = shallow(comp);


describe('NxrButton Snapshpt tests:', () => {
  test('Should render correctly', () => {
    expect(tree).toMatchSnapshot();
    tree.children[1].children[0].props.onClick();
    wrap.find('.NxrToogle_Btn').at(0).simulate('click');
    expect(wrap.getElement()).toMatchSnapshot();
  });
});

describe('NxrButton UI tests:', () => {
  it('Should active style for selected toggle', () => {
    let button = wrap.find('.NxrToogle_Btn').at(0);
    expect(button.hasClass('NxrToogle_Btn-Active')).toBe(true);
    expect(button.hasClass('NxrToogle_Btn-Inactive')).toBe(false);

    wrap.setProps({ firstTitle: values[1], secondTitle: values[0] });
    button = wrap.find('.NxrToogle_Btn').at(0);
    expect(button.hasClass('NxrToogle_Btn-Active')).toBe(false);
    expect(button.hasClass('NxrToogle_Btn-Inactive')).toBe(true);

    wrap.setProps({ firstTitle: values[0], secondTitle: values[1] });
    button = wrap.find('.NxrToogle_Btn').at(0);
    expect(button.hasClass('NxrToogle_Btn-Active')).toBe(true);
    expect(button.hasClass('NxrToogle_Btn-Inactive')).toBe(false);
  });

  it('should call handle toogle when button is clicked', () => {
    wrap.find('.NxrToogle_Btn').at(1).simulate('click');
    expect(wrap.find('.NxrToogle_Btn').at(1).hasClass('NxrToogle_Btn-Active')).toBe(true);
  });
});


