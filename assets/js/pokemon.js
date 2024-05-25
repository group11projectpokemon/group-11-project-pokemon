// This function creates the card structure for a pokemon
function createCard() {
  const pokeCard =
  $(`
  <div class="poke-card-container">
    <div class="poke-img-container shadow1">
      <div class="x-button">
        <img src="./assets/images/x-15.png">
      </div>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//078.png">
    </div>
    <button class="dark-blue shadow1">(Pokemon Name)</button>
    <button class="mid-blue shadow1">About</button>
  </div> 
  `)

  $('#poke-grid').prepend(pokeCard);
}

// for now I just had it make 6 cards to test the grid, but obvs this'll be replaced by a for loop through their array in local storage
createCard();
createCard();
createCard();
createCard();
