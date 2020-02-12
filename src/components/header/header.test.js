import React from 'react';
import { shallow } from 'enzyme';
import Header from './';
import { findByTestAttr } from './../../../Utils'

const setUp = (props = {}) => {
  const component = shallow(<Header {...props}/>)
  return component;
}

describe('Header Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'header-component');
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
    const logo = findByTestAttr(component, 'logo-img');
    expect(logo.length).toBe(1);
  });

})