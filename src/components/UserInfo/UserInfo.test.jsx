import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './UserInfo';

describe('UserInfo component', () => {
  it('renders UserInfo', () => {
    const wrapper = shallow(<UserInfo name="Scott" followersCount={2} followingCount={4} githubLink="link.com" />);

    expect(wrapper).toMatchSnapshot();
  });
});
