
const endpoint = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=' + searchTerm;
const repositories = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => repositories.push(...data));

function findMatches(wordToMatch, repositories) {
    return repositories.filter(place => {

        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
    });
};


