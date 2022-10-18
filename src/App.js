import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Eevee",
    type: "Normal",
    evolved: false,
    weight: 6.5,
    color: "Brown",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png",
    id: 133,
    number: "1",
    stone: "Use a Water Stone to envolve",
  });
  const [pokemon1, setPokemon1] = useState({
    name: "Eevee",
    type: "Normal",
    evolved: false,
    weight: 6.5,
    color: "Brown",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png",
    id: 133,
    number: "2",
    stone: "Use a Thunder Stone to envolve",
  });
  const [pokemon2, setPokemon2] = useState({
    name: "Eevee",
    type: "Normal",
    evolved: false,
    weight: 6.5,
    color: "Brown",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png",
    id: 133,
    number: "3",
    stone: "Use a Fire Stone to envolve",
  });
  const [pokemon3, setPokemon3] = useState({
    name: "Eevee",
    type: "Normal",
    evolved: false,
    weight: 6.5,
    color: "Brown",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png",
    id: 133,
    number: "4",
    stone: "Use a Sun Shard to envolve",
  });
  const [pokemon4, setPokemon4] = useState({
    name: "Eevee",
    type: "Normal",
    evolved: false,
    weight: 6.5,
    color: "Brown",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png",
    id: 133,
    number: "5",
    stone: "Use a Moon Shard to envolve",
  });
  const [pokemon5, setPokemon5] = useState({
    name: "Eevee",
    type: "Normal",
    evolved: false,
    weight: 6.5,
    color: "Brown",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png",
    id: 133,
    number: "6",
    stone: "Use a Leaf Stone to envolve",
  });
  const [pokemon6, setPokemon6] = useState({
    name: "Eevee",
    type: "Normal",
    evolved: false,
    weight: 6.5,
    color: "Brown",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png",
    id: 133,
    number: "7",
    stone: "Use a Ice Stone to envolve",
  });
  const [pokemon7, setPokemon7] = useState({
    name: "Eevee",
    type: "Normal",
    evolved: false,
    weight: 6.5,
    color: "Brown",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png",
    id: 133,
    number: "8",
    stone:
      "Knowing a Fairy-type move and having at least two levels of affection to envolve",
  });
  // Para fazer seus próximos pokemons, crie novos estados!

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard pokemon={pokemon} setPokemon={setPokemon} />
        <PokemonCard pokemon={pokemon1} setPokemon={setPokemon1} />
        <PokemonCard pokemon={pokemon2} setPokemon={setPokemon2} />
        <PokemonCard pokemon={pokemon3} setPokemon={setPokemon3} />
        <PokemonCard pokemon={pokemon4} setPokemon={setPokemon4} />
        <PokemonCard pokemon={pokemon5} setPokemon={setPokemon5} />
        <PokemonCard pokemon={pokemon6} setPokemon={setPokemon6} />
        <PokemonCard pokemon={pokemon7} setPokemon={setPokemon7} />
      </FlexContainer>
    </>
  );
}

export default App;
