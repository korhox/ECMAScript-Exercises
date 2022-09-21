import fetch from "node-fetch"

async function fetchCharacter(characterId) {
    const character = await fetch(
        `https://swapi.dev/api/people/${characterId}`
    ).then((res) => res.json());
    return character;
}

async function fetchFilms(urls) {
    const promises = urls.map((url) => fetch(url).then((res) => res.json()));
    const films = await Promise.all(promises);
    return films;
}

async function fetchAllTitles(characterId) {
    const character = await fetchCharacter(characterId);
    const titles = (await fetchFilms(character.films)).map((film) => film.title);

    return {
        name: character.name,
        movies: titles,
    };
}

const characters = process.argv.slice(2);

const promises = characters.map((characterId) =>
    fetchAllTitles(characterId).then((result) => result)
);

Promise.all(promises)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
