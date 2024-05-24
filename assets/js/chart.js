// Function to fetch Pokémon data from an API
function fetchPokemonData(pokemon) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
}


// Function to extract data and render the chart
function renderChart() {
    const pokemon = 'pikachu'; // Change this to the Pokémon, get the name from the user
    fetchPokemonData(pokemon).then((data) => {
        const ctx = document.getElementById('myChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'radar', // Change this to the desired chart type (e.g., 'line', 'bar', 'radar')
            data: {
                labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
                datasets: [{
                    label: `${data.name.charAt(0).toUpperCase() + data.name.slice(1)} Stats`,
                    data: [
                        data.stats[0].base_stat,
                        data.stats[1].base_stat,
                        data.stats[2].base_stat,
                        data.stats[3].base_stat,
                        data.stats[4].base_stat,
                        data.stats[5].base_stat
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 150
                    }
                }
            }
        });
    });
}


// Call the renderChart function to display the chart
renderChart();