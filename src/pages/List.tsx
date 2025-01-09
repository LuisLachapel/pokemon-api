
import { Stack, Card, Image, Text, CardBody, CardDescription } from "@chakra-ui/react"
import { DataList, DataListItem, DataListRoot } from "@chakra-ui/react";
import { getPokemon } from "@/controller/getpokemon";



const List = () => {
  
  const response = getPokemon();
  console.log(response);
  
  //fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json').then(response => response.json()).then(data => console.log(data))

  return (
  <>
    <Stack direction={{base: 'column', md: 'row'}} wrap='wrap' gap={5}>
      <Card.Root maxW="md" overflow="hidden">
        <Image
        src="https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
        //sizes="sm"
        height={150}
        />
          
        <Card.Body>
          <Card.Title>bulbasaur</Card.Title>
          <DataListRoot orientation='horizontal'>
              <DataListItem /*key={} label={item.label} value={item.value}*//>
              <DataListItem /*key={} label={item.label} value={item.value}*//>
             
          </DataListRoot>
        </Card.Body>
      </Card.Root>

      <Card.Root maxW="md">
      <Image
        src="https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif"
        //sizes="sm"
        height={150}
        />

        <Card.Body>
          <Card.Title>ivysaur</Card.Title>
        </Card.Body>
      </Card.Root>



      
  
      <Card.Root maxW="sm">
        <Image
        src="https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif"
        sizes="sm"
        height={150}/>
        <Card.Body>
          <Card.Title>venusaur</Card.Title>
        </Card.Body>
      </Card.Root>

      <Card.Root maxW="sm">
        <Image
        src="https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif"
        sizes="sm"
        height={150}/>
        <Card.Body>
          <Card.Title>charmander</Card.Title>
        </Card.Body>
      </Card.Root>

    </Stack>
    
  </>
  );
};

export default List;
