const fetch = function (url, fetchParam) {
    if (url === `https://api.github.com/users/Uniqcoda/repos` && fetchParam.method === 'GET') {
        return Promise.resolve([
            {
                "id": 164941171,
                "node_id": "MDEwOlJlcG9zaXRvcnkxNjQ5NDExNzE=",
                "name": "Color-Game",
                "html_url": "https://github.com/Uniqcoda/Color-Game",
                "url": "https://api.github.com/repos/Uniqcoda/Color-Game",
                "default_branch": "master"
            },
            {
                "id": 148664286,
                "node_id": "MDEwOlJlcG9zaXRvcnkxNDg2NjQyODY=",
                "name": "Django-Training",
                "html_url": "https://github.com/Uniqcoda/Django-Training",
                "url": "https://api.github.com/repos/Uniqcoda/Django-Training",
                "default_branch": "master"
            },
            {
                "id": 159246786,
                "node_id": "MDEwOlJlcG9zaXRvcnkxNTkyNDY3ODY=",
                "name": "Myblog",
                "html_url": "https://github.com/Uniqcoda/Myblog",
                "url": "https://api.github.com/repos/Uniqcoda/Myblog",
                "default_branch": "master"
            },
            {
                "id": 172734635,
                "node_id": "MDEwOlJlcG9zaXRvcnkxNzI3MzQ2MzU=",
                "name": "OnlineRent",
                "html_url": "https://github.com/Uniqcoda/OnlineRent",
                "url": "https://api.github.com/repos/Uniqcoda/OnlineRent",
                "default_branch": "master"
            },
            {
                "id": 159221300,
                "node_id": "MDEwOlJlcG9zaXRvcnkxNTkyMjEzMDA=",
                "name": "Passwordvalidator",
                "html_url": "https://github.com/Uniqcoda/Passwordvalidator",
                "url": "https://api.github.com/repos/Uniqcoda/Passwordvalidator",
                "default_branch": "master"
            }
        ])
    }
}
module.exports = fetch; 