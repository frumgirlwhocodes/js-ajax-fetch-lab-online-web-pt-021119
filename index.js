const baseURL = 'https://api.github.com';
const user = 'frumgirlwhocodes';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
   const url = `${baseURL}/repos/${repo}/forks`;
   fetch(url, { method: POST, headers: { Authorization: `token ${getToken()}`}}).then(res => res.json()).then(json => showResults(json));
}

function showResults(json) {
  const newResult = document.createElement('p');
  result.innerHTML = `<a href="${json.html_url}">${json.html_url}</a>`;
  document.getElementById('results').appendChild(newResult);
}


function createIssue() {

}

function getIssues() {

}
