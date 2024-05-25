fetch("https://pokeapi.co/api/v2/pokemon?limit=1302")
.then((response) => response.json())
.then((data) => {
    const names = data.results.map(object => object.name)
    $( function() {
        $( "#pokelist" ).autocomplete({
          source: function(request, response) {
            let results = $.ui.autocomplete.filter(names, request.term);
    
            response(results.slice(0, 10));
        }
        });
      } );
})

// const modalbutton = document.getElementById('modalbutton');

// modalbutton.addEventListener('click', getPokemon);

const submitNewPokemon = document.getElementById('submit-new-pokemon');
const pokemonInput = document.getElementById("pokelist")

// add the pokemon input to array in local storage

submitNewPokemon.addEventListener('click', function() {
  let pokemonName = pokemonInput.value;
  console.log(pokemonName);
  if (pokemonName != "") {
    pokemonRosterArray.push(pokemonName);
    localStorage.setItem("pokemonRosterArray", pokemonRosterArray);
    console.log(pokemonRosterArray);
  }
})