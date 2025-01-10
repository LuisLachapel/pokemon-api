import axios from "axios";
import { Pokemon } from "@/models/pokemon";

export async function getPokemon(): Promise<Pokemon[]>{
  const response = await axios.get('https://unpkg.com/pokemons@1.1.0/pokemons.json');

  const data = response.data;

  const pokemons: Pokemon[] = data.results.map((pokemon: any) => ({
    national_number: pokemon.national_number,
    name: pokemon.name,
    type: pokemon.type[0],
    total: pokemon.total,
    attack: pokemon.attack,
    defense: pokemon.defense,
    sp_atk: pokemon.sp_atk,
    sp_def: pokemon.sp_def,
    speed: pokemon.speed,
    hp: pokemon.hp,
    imggif: pokemon.sprites['animated'],
    imglarge: pokemon.sprites['large'],
    imgnormal: pokemon.sprites['normal']

  }));

  return pokemons;

}

  