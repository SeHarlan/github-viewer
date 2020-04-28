import React, { Component } from 'react';
import { fetchGithubInfo, fetchRepos } from '../services/github.jsx';
import NameInput from '../components/NameInput/NameInput.jsx';
import UserInfo from '../components/UserInfo/UserInfo.jsx';
import Repos from '../components/Repos/Repos.jsx';

export default class GithubContainer extends Component {
  state = {
    username: 'seharlan',
    name: null,
    followersCount: 0,
    followingCount: 0,
    githubLink: '',
    repos: []
  }

  handleButtonClick = () => {
    fetchGithubInfo(this.state.username)
      .then(info => {
        this.setState({
          name: info.name,
          followersCount: info.followers,
          followingCount: info.following,
          githubLink: info.html_url,
        });
        return info.repos_url;
      })
      .then(url => {
        fetchRepos(url)
          .then(repos => this.setState({ repos }));
      });
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  render() {
    const { name, username, followersCount, followingCount, githubLink, repos } = this.state;

    const userProfile = !this.state.name 
      ? (<h1>Please Enter Your Github Username</h1>)
      : (<UserInfo 
        name={name} 
        followersCount={followersCount}
        followingCount={followingCount}
        githubLink={githubLink}
      />
      );

    return (
      <>
        <NameInput 
          onButtonClick={this.handleButtonClick}
          onChange={this.handleChange}
          username={username} />
        {userProfile}
        <Repos repos={repos} />
      </>);
  }
}
