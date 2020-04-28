export function fetchGithubInfo(name) {
  return fetch(`https://api.github.com/users/${name}`)
    .then(res => res.json());
}
export function fetchRepos(url) {
  return fetch(url)
    .then(res => res.json());
}
