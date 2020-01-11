import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without error', () => {
    expect(wrapper.find('.title')).toHaveLength(1);
  });

  it('renders Basics component', () => {
    expect(wrapper.find('Basics')).toHaveLength(1);
  });

  it('renders Stats component', () => {
    expect(wrapper.find('Stats')).toHaveLength(1);
  });

  it('renders Feats component', () => {
    expect(wrapper.find('Feats')).toHaveLength(1);
  });

  it('renders Button Panel component', () => {
    expect(wrapper.find('ButtonPanel')).toHaveLength(1);
  });
});

