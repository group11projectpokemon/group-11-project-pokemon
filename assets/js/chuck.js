// Get the chuck norris joke from the API
function fetchChuckNorris(pokemonName)     {
    fetch('https://api.chucknorris.io/jokes/random?category=food')
    .then(response => {
        return response.json();
    })
    // Display the joke on the page with a typewriter effect
    .then(function (data) {
        $('#chuck').empty();
        // Replace the word "Chuck Norris" or "Chuck" with the pokemon name
        data.value = data.value.replace(/Chuck Norris/g, pokemonName);
        data.value = data.value.replace(/Chuck/g, pokemonName);
        data.value = data.value.replace(/Norris/g, "Ash");
        let chuck = data.value.split('');
        let i = 0;
        let interval = setInterval(function() {
            if (i < chuck.length) {
                $('#chuck').append(chuck[i]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 50);
    })
}
