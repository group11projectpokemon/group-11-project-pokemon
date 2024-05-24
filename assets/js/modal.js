const modalbutton = document.getElementById('modalbutton');

function getPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    }
    )
}

modalbutton.addEventListener('click', getPokemon);
