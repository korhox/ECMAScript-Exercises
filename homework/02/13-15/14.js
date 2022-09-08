import axios from 'axios';
const endpoint = "https://swapi.dev/api/people/";

let vars = process.argv.slice(2);
if (vars.length < 1) {
    vars = [1, 2]
}

async function getPeople(ids) {
    let result = [];
    try {
        for (let i = 0; i < vars.length; i++) {
            const response = await axios.get(endpoint + vars[i]);
            result.push(response.data);
        }
    } catch (error) {
        console.error(error);
    }
    return result;
}

const result = await getPeople(vars);

console.log(
    "<ul>\n" +
    result.map((val) => {
        return `    <li>${val.name}</li>\n`;
    }).join("")
    + "</ul>\n"
);