import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos.jsx';

describe('Repos component', () => {
  it('renders Repos', () => {
    const wrapper = shallow(<Repos repos={[{ name: 'repo test' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
