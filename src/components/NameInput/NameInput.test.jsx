import React from 'react';
import { shallow } from 'enzyme';
import NameInput from './NameInput';

describe('NameInput component', () => {
  it('renders NameInput', () => {
    const wrapper = shallow(<NameInput onButtonClick={() => { }} onChange={() => { }} username="Scott" />);
    expect(wrapper).toMatchSnapshot();
  });
});
