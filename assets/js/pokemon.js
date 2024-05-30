// declare the variables
const submitNewPokemon = document.getElementById('submit-new-pokemon');
const pokemonInput = document.getElementById("pokelist");
// declare the pokemon objects
let poke0 = JSON.parse(localStorage.getItem("poke0")) || [];
let poke1 = JSON.parse(localStorage.getItem("poke1")) || [];
let poke2 = JSON.parse(localStorage.getItem("poke2")) || [];
let poke3 = JSON.parse(localStorage.getItem("poke3")) || [];
<<<<<<< HEAD
=======

// set local storage to the pokemon objects
localStorage.setItem("poke0", JSON.stringify(poke0));
localStorage.setItem("poke1", JSON.stringify(poke1));
localStorage.setItem("poke2", JSON.stringify(poke2));
localStorage.setItem("poke3", JSON.stringify(poke3));

>>>>>>> 5367fe308634af20873209c98aba3d6645be8185
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
<<<<<<< HEAD
=======
  pokemonInput.value = "";
>>>>>>> 5367fe308634af20873209c98aba3d6645be8185
});

// fetch the pokemon data from the api
function fetchPoke(pokemonName, pokemonSeat) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then(response => {
    return response.json();
  })
  .then(function (data) {
<<<<<<< HEAD
    console.log(data);
=======
>>>>>>> 5367fe308634af20873209c98aba3d6645be8185
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
<<<<<<< HEAD
function setImage(pokeData) {  
  if (pokeData.seat == 0 || pokeData.seat == 1) {
    $(`#slot${pokeData.seat} img`).attr('src', pokeData.imgSrc);
  } else {
    $(`#slot${pokeData.seat} img`).attr('src', pokeData.imgSrcBack);
  }
  // set the audio of the pokemon
  $(`#slot${pokeData.seat}`).attr('data-audio', pokeData.cry);
  // set the name of the pokemon
  $(`#slot${pokeData.seat}`).attr('data-name', pokeData.name);
}


// This function creates the card structure for a pokemon
// function createCard(pokemon) {
//   const pokeCard =
//   $(`
//     <div class="poke-card-container">
//       <div class="poke-img-container shadow1">
//         <div class="x-button" data-name=${pokemon.name}>
//           <img src="./assets/images/x-15.png">
//       </div>        
//           <img class="poke-img" src=${pokemon.imgSrc} data-audio=${pokemon.cry}>
//       </div>
//       <button class="dark-blue shadow1">${pokemon.name}</button>
//       <button class="mid-blue shadow1">About</button>
//     </div> 
//   `)

// const { set } = require("firebase/database");

//   $('#poke-grid').prepend(pokeCard);
// }

// DON'T NEED THIS FUNCITON ANYMORE WITH THE CAMPFIRE
// function createAddButton() {
//   const addButton =
//   $(`
//   <div id="add-new" class="shadow1" id="modalbutton" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     <div class="plus-button">
//       <img src="./assets/images/+.png">
//     </div>
//     <p>Add Pokémon<p>
//   </div>
//   `)
//   $('#poke-grid').append(addButton);
// }

// let pokemonRosterArray = JSON.parse(localStorage.getItem("pokemonRosterArray")) || [];




// // Removes a pokemon from the roster
// $(document).on('click', '.x-button', function() {
//   // get the name of the pokemon and make it lowercase
//   let pokemonName = this.dataset.name.toLowerCase();
//   console.log(pokemonName);

//   let pokemonRoster = JSON.parse(localStorage.getItem("pokemonRosterArray")) || [];

//   console.log(pokemonRoster);
//   pokemonRoster = pokemonRoster.filter(pokemon => pokemon !== pokemonName);
//   console.log(pokemonRoster);
//   localStorage.setItem("pokemonRosterArray", JSON.stringify(pokemonRoster));

//   iterateArray();
// });

// show pokemon in storage on page load
// iterateArray()



// // function to iterate through array and get api data
// function iterateArray() {
//   // first remove any existing cards
//   $('#poke-grid').html("");

//   // create the add button - don't need this anymore
//   // createAddButton();

//   // get the array from local storage
//   let pokemonRosterArray = JSON.parse(localStorage.getItem("pokemonRosterArray")) || [];

//   // iterate through array for pokemonName, send to fetch PokeImg
//   for (let i = 0; i < pokemonRosterArray.length; i++) {
//     let pokemonName = pokemonRosterArray[i];
//     console.log(pokemonName);
//     fetchPokeImg(pokemonName);
//   }
// }
=======
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
>>>>>>> 5367fe308634af20873209c98aba3d6645be8185
