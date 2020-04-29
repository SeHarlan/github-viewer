export function fetchGithubInfo(name) {
  return fetch(`https://api.github.com/users/${name}`)
    .then(res => res.json());
}
export function fetchRepos(url) {
  return fetch(url)
    .then(res => res.json())
    .then(repos => {
      return repos.map(repo => {
        const pullsUrl = repo.pulls_url.slice(0, -9);
        //api needs a number, this amount could potentially be chosen by the user
        const pulls = Promise.all([1, 2, 3, 4, 5].map(num => getPull(pullsUrl, num)));

        return { name: repo.name, pulls: pulls };
      });
    });
}

function getPull(url, num) {
  return fetch(`${url}/${num}`)
    .then(res => res.json())
    .then(pull => ({ 
      number: pull.number, 
      body: pull.body, 
      state: pull.state,
      id: pull.id
    }));
}
