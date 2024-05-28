// Get the chuck norris joke from the API
function fetchChuckNorris()     {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(response => {
        return response.json();
    })
    // Display the joke on the page with a typewriter effect
    .then(function (data) {
        var chuck = data.value.split('');
        var i = 0;
        var interval = setInterval(function() {
            if (i < chuck.length) {
                $('#chuck').append(chuck[i]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 50);
    })
}

fetchChuckNorris();
