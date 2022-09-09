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

let bmiList = [];

for (let i in result) {
    let h = Number(result[i].height) / 100;
    let m = Number(result[i].mass);
    bmiList.push({
        "name": result[i].name,
        "bmi": Math.round((m / (h * h)) * 100) / 100
    });
}

console.log(
    "<ul>\n" +
    bmiList.map((val) => {
        return `    <li>${val.name} (${val.bmi})</li>\n`;
    }).join("")
    + "</ul>\n"
);

