import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import NxrButton from '../../UI/NxrButton/NxrButton';
import { MySpy } from '../../../spy';

describe('NxrButton Snapshpt tests:', () => {
  test('Should render correctly NxrButton', () => {
    const tree = renderer.create(<NxrButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('NxrButton UI tests:', () => {
  test('Should call click handler method', () => {
    const mySpy = new MySpy();
    const mockCallBack = mySpy.fn();
    const wrap = shallow(<NxrButton click={mockCallBack}>Search</NxrButton>);
    wrap.find('.NrxBtn').simulate('click');
    expect(mySpy.calls).toEqual(1);
  });
});