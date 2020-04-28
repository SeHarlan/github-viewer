import React from 'react';
import { shallow } from 'enzyme';
import Repos from './repos';

describe('Repos component', () => {
  it('renders Repos', () => {
    const wrapper = shallow(<Repos repos={[{ repoName: 'repo test' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
