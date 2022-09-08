const axios = require('axios').default;
const endpoint = "https://swapi.dev/api/people/";
const vars = process.argv.slice(2);

axios.get(endpoint + vars[0])
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });