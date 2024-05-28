// Get the chuck norris joke from the API
function fetchChuckNorris()     {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(response => {
        return response.json();
    })
    .then(function (data) {
        $('.chuck').html(data.value);
    })
}

fetchChuckNorris();
