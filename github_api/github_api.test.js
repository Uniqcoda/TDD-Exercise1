// Takes a username as an argument and makes a call to GitHub API and 
// returns all the repositories owned by the user as an array.

const getRepos = require('./github_api');
jest.mock('./github_api');

  test('takes only strings as parameter', function () {
      return expect(getRepos()).rejects.toMatch('enter a string');
  })

  test('returns a value', function () {
      return getRepos('Uniqcoda').then(function (result) {
          expect(result).toBeDefined();
      })
  })