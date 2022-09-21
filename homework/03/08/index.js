import readlineSync from "readline-sync"
import fetch from "node-fetch"

async function fetchTitle(characterId) {
    const character = await fetch(
        `https://swapi.dev/api/people/${characterId}`
    ).then((res) => res.json());

    const film = await fetch(character.films[0]).then((res) => res.json());
    return film.title;
}

let characterId = readlineSync.question("give id: ");
fetchTitle(characterId)
    .then((title) => console.log(`First film title: ${title}`))
    .catch((error) => console.log(error));
