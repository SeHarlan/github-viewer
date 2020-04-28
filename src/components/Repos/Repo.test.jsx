import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo.jsx';

describe('Repo component', () => {
  it('renders Repo', () => {
    const wrapper = shallow(<Repo repoName="test repo" />);
    expect(wrapper).toMatchSnapshot();
  });
});
