import axios from "axios";

axios.get('https://unpkg.com/pokemons@1.1.0/pokemons.json').then(function (response){
  console.log(response.data)
})