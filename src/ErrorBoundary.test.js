import React from 'react';
import { create } from "react-test-renderer";
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

function Something() {
  // this is just a placeholder
  return null;
}

describe('ErrorBoundary tests:', () => {
  test('Should change state correctly when an error is happend', () => {
    const spy = jest.fn();
    const wrapper = shallow(<ErrorBoundary spy={spy}><Something /></ErrorBoundary>);
    const error = new Error('hi!');
    wrapper.find(Something).simulateError(error);
    expect(wrapper.state()).toHaveProperty('hasError', true);
  });
});
