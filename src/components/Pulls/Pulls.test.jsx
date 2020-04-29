import React from 'react';
import { shallow } from 'enzyme';
import Pulls from './Pulls.jsx';

describe('Pulls component', () => {
  it('renders Pulls', () => {
    const wrapper = shallow(<Pulls pulls={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
