// Takes a username as an argument and makes a call to GitHub API and 
// returns all the repositories owned by the user as an array.
const fetch = require('node-fetch');

function getRepos(username) {
    if (typeof username === 'string') {
       return fetch(`https://api.github.com/users/${username}/repos`, {
           method: 'GET'
       })
       .then(function (response) {
        //    console.log(response);
           return response;
       });
    } else {
        return "enter a string";
    }         
};

getRepos('Uniqcoda');
 module.exports = getRepos;

