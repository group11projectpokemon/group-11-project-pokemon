let isTyping = false; // flag to check if the quote is typing

// Get the chuck norris joke from the API
function fetchChuckNorris(pokemonName)     {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(response => {
        return response.json();
    })
    .then(function (data) {
        // Check if the quote is typing from a previous input
        if (isTyping) return;
        isTyping = true;
        $('#chuck').empty();
        // Replace the word "Chuck Norris" pokemon name 
        let chuck = data.value.replace(/Chuck Norris|Chuck|Norris/gi, pokemonName);
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
