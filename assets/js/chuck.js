// Get the chuck norris joke from the API
<<<<<<< HEAD
function fetchChuckNorris(pokemonName)     {
    fetch('https://api.chucknorris.io/jokes/random?category=food')
    .then(response => {
        return response.json();
    })
    // Display the joke on the page with a typewriter effect
    .then(function (data) {
=======
let isTyping = false;

function fetchChuckNorris(pokemonName)     {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(response => {
        return response.json();
    })
    .then(function (data) {
        if (isTyping) return;
        isTyping = true;
>>>>>>> 5367fe308634af20873209c98aba3d6645be8185
        $('#chuck').empty();
        // Replace the word "Chuck Norris" or "Chuck" with the pokemon name
        data.value = data.value.replace(/Chuck Norris/g, pokemonName);
        data.value = data.value.replace(/Chuck/g, pokemonName);
<<<<<<< HEAD
        data.value = data.value.replace(/Norris/g, "Ash");
=======
        data.value = data.value.replace(/Norris/g, pokemonName);
>>>>>>> 5367fe308634af20873209c98aba3d6645be8185
        let chuck = data.value.split('');
        let i = 0;
        let interval = setInterval(function() {
            if (i < chuck.length) {
                $('#chuck').append(chuck[i]);
                i++;
            } else {
                clearInterval(interval);
<<<<<<< HEAD
=======
                isTyping = false;                
>>>>>>> 5367fe308634af20873209c98aba3d6645be8185
            }
        }, 50);
    })
}
