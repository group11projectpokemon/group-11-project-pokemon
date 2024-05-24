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
