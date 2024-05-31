// declare the variables
const submitNewPokemon = document.getElementById('submit-new-pokemon');
const pokemonInput = document.getElementById("pokelist");
// declare the pokemon objects
let poke0 = JSON.parse(localStorage.getItem("poke0")) || [];
let poke1 = JSON.parse(localStorage.getItem("poke1")) || [];
let poke2 = JSON.parse(localStorage.getItem("poke2")) || [];
let poke3 = JSON.parse(localStorage.getItem("poke3")) || [];

// set local storage to the pokemon objects
localStorage.setItem("poke0", JSON.stringify(poke0));
localStorage.setItem("poke1", JSON.stringify(poke1));
localStorage.setItem("poke2", JSON.stringify(poke2));
localStorage.setItem("poke3", JSON.stringify(poke3));

// set the image of the pokemon on page load
setImage(poke0);
setImage(poke1);
setImage(poke2);
setImage(poke3);

// submit the new pokemon
submitNewPokemon.addEventListener('click', function() {
  // get the radio button value
  let pokeSeat = $('#radio-grid input[name="radioButtons"]:checked').val();
  // get the pokemon name and seat
  let pokemonName = pokemonInput.value;
  // if the pokemon name and seat are not empty
  if (pokemonName != "" && pokeSeat != "") {
    fetchPoke(pokemonName, pokeSeat);
  }
  pokemonInput.value = "";
});

// fetch the pokemon data from the api
function fetchPoke(pokemonName, pokemonSeat) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then(response => {
    return response.json();
  })
  .then(function (data) {
    // create the pokemon object
    let pokemon = {
      //capitalize the first letter of the pokemon name
      name : pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1),
      imgSrc : (data.sprites.front_default),
      imgSrcBack : (data.sprites.back_default),
      cry : data.cries.latest,
      seat: pokemonSeat
    }
    // save the pokemon object to local storage
    localStorage.setItem(`poke${pokemonSeat}`, JSON.stringify(pokemon));
    setImage(pokemon);
  })
}

// set the image of the pokemon
// sets either front or back image of the pokemon and the direction of the image
function setImage(pokeData) {  
  
  //if campfire background is selected  
  if ($(`.camp-container > img`).attr('src') == './assets/images/campfire.webp') {     
    if (pokeData.seat == 0 || pokeData.seat == 1) {
      $(`#slot${pokeData.seat} img`).attr('src', pokeData.imgSrc);
    } else {
      $(`#slot${pokeData.seat} img`).attr('src', pokeData.imgSrcBack);
    }

    //remove the flip effect on the 4 slots
    $(`#slot${pokeData.seat} img`).css('transform', 'none');

    if (pokeData.seat == 0 || pokeData.seat == 3) {
      $(`#slot${pokeData.seat} img`).css('transform', 'scaleX(-1)');
    };

  } 
  
  if ($(`.camp-container > img`).attr('src') == './assets/images/lounge2.png') {
    $(`#slot${pokeData.seat} img`).attr('src', pokeData.imgSrc);
    
    $(`#slot${pokeData.seat} img`).css('transform', 'none');

    if (pokeData.seat == 1 || pokeData.seat == 0) {
      $(`#slot${pokeData.seat} img`).css('transform', 'scaleX(-1)');
    };

  };
  
  // set the audio of the pokemon
  $(`#slot${pokeData.seat}`).attr('data-cry', pokeData.cry);
  // set the name of the pokemon
  $(`#slot${pokeData.seat}`).attr('data-name', pokeData.name);
  // set the seat of the pokemon
  $(`#slot${pokeData.seat}`).attr('data-seat', pokeData.seat); 
}
