
import { Stack, Card, Image } from "@chakra-ui/react"
import { DataListItem, DataListRoot } from "@/components/ui/data-list"
import { getPokemon } from "@/controller/getpokemon";
import { useState, useEffect } from "react";
import { Pokemon } from "@/models/pokemon";
import { Container } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"


const List = () => {
  
  
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() =>{
    const getAll = async () =>{
       const allPokemon = await getPokemon();
       setPokemons(allPokemon);
    };
    getAll();
  })

  const pokemonFilter = pokemons?.slice(0,151).filter((pokemon) =>{
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  })
 
  

  return (
  <>
  <Container >
    <Input placeholder="Buscar"
    variant="flushed"
    width="40%"
    marginTop={4}
    value={query}
    onChange={(event) => setQuery(event.target.value.trim())}/>
    <Stack direction={{base: 'column', md: 'row'}} wrap='wrap' gap={6} marginTop={4}>
      
      {pokemonFilter?.slice(0,151).map((pokemon) =>(
      <Card.Root maxW="md" overflow="hidden">
        <Image
        src={pokemon.imggif}
        height={20}
        fit="contain"

        />
          
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <DataListRoot orientation='horizontal'>
          <DataListItem label="HP" value={pokemon.hp} />
                <DataListItem label="Ataque" value={pokemon.attack} />
                <DataListItem label="Defensa" value={pokemon.defense} />
                <DataListItem label="Velocidad" value={pokemon.speed} />
                <DataListItem label="E.Ataque" value={pokemon.sp_atk} />
                <DataListItem label="E.Defensa" value={pokemon.sp_def} />
          </DataListRoot>
        </Card.Body>
      </Card.Root>
      ))}
      

    </Stack>
    </Container>
    
  </>
  );
};

export default List;
