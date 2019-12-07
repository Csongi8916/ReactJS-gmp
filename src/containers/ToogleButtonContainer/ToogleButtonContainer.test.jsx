import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import NxrToogleButton from '../../components/UI/NxrToogleButton/NxrToogleButton';
import * as constants from '../../constants';

describe('ToogleButtonContainer Snapshpt tests', () => {

});

describe('ToogleButtonContainer Snapshpt tests:', () => {
  test('Should render correctly NxrToogleButton', () => {
    const tree = renderer.create(<NxrToogleButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});