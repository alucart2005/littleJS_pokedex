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
  for (let j = 0; j < pokemons.length; j++) {
    pokemons[j].nr = orderNumber(pokemons[j].url);
  }
  pokemons.sort((a, b) => a.nr - b.nr);
  pokemons.forEach((item) => {

    let numero3decimales = ordernumber(item.url)
    if (numero3decimales < 10) {
      numero3decimales = "00" + numero3decimales;
    }else if (numero3decimales < 100) {
      numero3decimales = "0" + numero3decimales;
    } else {
      numero3decimales = numero3decimales;
    }

    let divItem = document.createElement("li");
    divItem.classList.add("item");
    var img = new Image();
    const toggleurl = toggle 
      ? "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" 
      : "https://serebii.net/pokemongo/pokemon/";
    img.src = "https://www.gifsanimados.org/data/media/298/comida-y-bebida-imagen-animada-0018.gif"
    const urlImage = `${toggleurl}${numero3decimales}.png`;
    img.setAttribute("data-img", urlImage);
    img.setAttribute("class", pokeimage);
    img.setAttribute("alt", item.name);

    img.src = `${toggleurl}${numero3decimales}.png`;  
    divItem.innerHTML = `<div>${orderNumber(item.url)}-${item.name}</div>`;
    divItem.appendChild(img);
    container.appendChild(divItem);
  });

  console.log(pokemons);
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