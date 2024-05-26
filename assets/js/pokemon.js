// This function creates the card structure for a pokemon
function createCard(pokemon) {
  const pokeCard =
  $(`
  <div class="poke-card-container">
    <div class="poke-img-container shadow1">
      <div class="x-button" data-name=${pokemon.name}>
        <img src="./assets/images/x-15.png">
      </div>
        <img class="poke-img" src=${pokemon.imgSrc} data-audio=${pokemon.cry}>
    </div>
    <button class="dark-blue shadow1">${pokemon.name}</button>
    <button class="mid-blue shadow1">About</button>
  </div> 
  `)

  $('#poke-grid').prepend(pokeCard);
}

function createAddButton() {
  const addButton =
  $(`
  <div id="add-new" class="shadow1" id="modalbutton" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <div class="plus-button">
      <img src="./assets/images/+.png">
    </div>
    <p>Add Pokémon<p>
  </div>
  `)
  $('#poke-grid').append(addButton);
}

// for now I just had it make 6 cards to test the grid, but obvs this'll be replaced by a for loop through their array in local storage
// createCard();
// createCard();
// createCard();
// createCard();

let pokemonRosterArray = JSON.parse(localStorage.getItem("pokemonRosterArray")) || [];
const submitNewPokemon = document.getElementById('submit-new-pokemon');
const pokemonInput = document.getElementById("pokelist");

// add the pokemon input to array in local storage
submitNewPokemon.addEventListener('click', function() {
  let pokemonName = pokemonInput.value;
  console.log(pokemonName);
  if (pokemonName != "") {
    pokemonRosterArray.push(pokemonName);
    localStorage.setItem("pokemonRosterArray", JSON.stringify(pokemonRosterArray));
    console.log(pokemonRosterArray);
    iterateArray();
  }
});

// function to iterate through array and get api data
function iterateArray() {
  // first remove any existing cards
  $('#poke-grid').html("");

  // create the add button
  createAddButton();

  // get the array from local storage
  let pokemonRosterArray = JSON.parse(localStorage.getItem("pokemonRosterArray")) || [];

  // iterate through array for pokemonName, send to fetch PokeImg
  for (let i = 0; i < pokemonRosterArray.length; i++) {
    let pokemonName = pokemonRosterArray[i];
    console.log(pokemonName);
    fetchPokeImg(pokemonName);
  }
}

// this function only fetches the names and pictures to display on the cards. Data is fetched again for the chart
function fetchPokeImg(pokemonName) {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // maybe we could put everything we need to generate the chart into this object as well so we don't have to call again? IDK
    let pokemon = {
      // capitalizes the name
      name : pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1),
      imgSrc : (data.sprites.front_default),
      cry : data.cries.latest
    }
    console.log(pokemon.imgSrc);
    console.log(pokemon.id);
    createCard(pokemon);
  })
}

// Removes a pokemon from the roster
$(document).on('click', '.x-button', function() {
  // get the name of the pokemon and make it lowercase
  let pokemonName = this.dataset.name.toLowerCase();
  console.log(pokemonName);

  let pokemonRoster = JSON.parse(localStorage.getItem("pokemonRosterArray")) || [];

  console.log(pokemonRoster);
  pokemonRoster = pokemonRoster.filter(pokemon => pokemon !== pokemonName);
  console.log(pokemonRoster);
  localStorage.setItem("pokemonRosterArray", JSON.stringify(pokemonRoster));

  iterateArray();
});

// show pokemon in storage on page load
iterateArray()