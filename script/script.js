document.addEventListener('DOMContentLoaded', 
function() {

  const fetchPokemon = async (endpoint) => {
    let data;
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      data = await response.json();
    }catch(err) {
      console.log(err);
    }
    return data.pokemon_species;
 };
 function orderNumber(str){
  var mySubString = str.substring(
    str.lastIndexOf("s/") + 2,
    str.lastIndexOf("/")
  );
  return mySubString;
 }
 async function getPokemon(numero) {
  let endpoint = `https://pokeapi.co/api/v2/generation/${numero}/`;
  var container = document.getElementById("container");
  container.innerHTML = "";
  let pokemons = [];
  pokemons = await fetchPokemon(endpoint);
  for (let i = 0; i < pokemons.length; i++) {

  }
  // console.log(pokemons);
 };
  getPokemon(1);
  var geners = [
    "generation-1",
    "generation-2",
    "generation-3",
    "generation-4",
    "generation-5",
    "generation-6",
    "generation-7",
  ]
  var filters = document.getElementById("filters");
  var gen = "";
  for (let i = 0; i < geners.length; i++) {
    gen += `<input type="radio" class="radio-gens" id=${geners[i]} value=${i+1} name="generation" checked>
    <label for = ${geners[i]}  class="label-gens">${geners[i]}</label>`;
  }
  filters.innerHTML = gen;
});