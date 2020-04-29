import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo.jsx';

describe('Repo component', () => {
  it('renders Repo', () => {
    const wrapper = shallow(<Repo name="test repo" pulls={[{ number: 3, body: 'test' }]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
