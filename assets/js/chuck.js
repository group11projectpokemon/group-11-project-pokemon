// Get the chuck norris joke from the API
let isTyping = false;

function fetchChuckNorris(pokemonName)     {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(response => {
        return response.json();
    })
    .then(function (data) {
        if (isTyping) return;
        isTyping = true;
        $('#chuck').empty();
        // Replace the word "Chuck Norris" or "Chuck" with the pokemon name
        data.value = data.value.replace(/Chuck Norris/g, pokemonName);
        data.value = data.value.replace(/Chuck/g, pokemonName);
        data.value = data.value.replace(/Norris/g, pokemonName);
        let chuck = data.value.split('');
        let i = 0;
        let interval = setInterval(function() {
            if (i < chuck.length) {
                $('#chuck').append(chuck[i]);
                i++;
            } else {
                clearInterval(interval);
                isTyping = false;                
            }
        }, 50);
    })
}
