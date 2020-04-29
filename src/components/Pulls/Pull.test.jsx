import React from 'react';
import { shallow } from 'enzyme';
import Pull from './Pull.jsx';

describe('Pull component', () => {
  it('renders Pull', () => {
    const wrapper = shallow(<Pull pullBody="pullbody" pullNumber={2}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
