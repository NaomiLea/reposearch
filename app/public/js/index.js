

const endpoint = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=hello'
const repositories = [];

console.log(endpoint);

function findMatches(wordToMatch, repositories) {
    return repositories.filter(place => {

        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
    });
};


