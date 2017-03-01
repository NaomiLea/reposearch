


const repositories = [];


function findMatches(wordToMatch, repositories) {
    return repositories.filter(place => {

        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
    });
};


