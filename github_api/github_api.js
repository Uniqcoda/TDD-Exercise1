// Takes a username as an argument and makes a call to GitHub API and 
// returns all the repositories owned by the user as an array.
const fetch = require('./node_modules/node-fetch');

function getRepos(username) {
    if (typeof username === 'string') {
       return fetch(`https://api.github.com/users/${username}/repos`)
       .then(function (response) {
           return response.json();
       })
       .then(function (result) {
           console.table(result); 
       })
    } 
    throw "enter a string";      
}

 module.exports = getRepos;

