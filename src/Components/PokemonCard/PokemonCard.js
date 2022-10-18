import React from "react";
import { Card, PokemonType, EvolveButton, PokemonName } from "./styles";

const PokemonCard = (props) => {
  console.log(props);
  const evoluirPokemon = (pokemonNumber) => {
    console.log("Cliquei no botão de evoluir");
    if (pokemonNumber === "1") {
      props.setPokemon({
        ...props.pokemon,
        name: "Vaporeon",
        type: "Water",
        evolved: true,
        weight: 29,
        color: "CornflowerBlue",
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/f/fd/134Vaporeon.png/250px-134Vaporeon.png",
        id: 134,
        stone: "",
      });
    } else if (pokemonNumber === "2") {
      props.setPokemon({
        ...props.pokemon,
        name: "Jolteon",
        type: "Eletric",
        evolved: true,
        weight: 24.5,
        color: "Yellow",
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/b/bb/135Jolteon.png/250px-135Jolteon.png",
        id: 135,
        stone: "",
      });
    } else if (pokemonNumber === "3") {
      props.setPokemon({
        ...props.pokemon,
        name: "Flareon",
        type: "Fire",
        evolved: true,
        weight: 25,
        color: "FireBrick",
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/d/dd/136Flareon.png/250px-136Flareon.png",
        id: 136,
        stone: "",
      });
    } else if (pokemonNumber === "4") {
      props.setPokemon({
        ...props.pokemon,
        name: "Espeon",
        type: "Psychic",
        evolved: true,
        weight: 26.5,
        color: "DarkOrchid",
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/a/a7/196Espeon.png/250px-196Espeon.png",
        id: 196,
        stone: "",
      });
    } else if (pokemonNumber === "5") {
      props.setPokemon({
        ...props.pokemon,
        name: "Umbreon",
        type: "Dark",
        evolved: true,
        weight: 27,
        color: "DimGrey",
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/3/3d/197Umbreon.png/250px-197Umbreon.png",
        id: 197,
        stone: "",
      });
    } else if (pokemonNumber === "6") {
      props.setPokemon({
        ...props.pokemon,
        name: "Leafeon",
        type: "Grass",
        evolved: true,
        weight: 25.5,
        color: "LimeGreen",
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/f/f5/470Leafeon.png/240px-470Leafeon.png",
        id: 470,
        stone: "",
      });
    } else if (pokemonNumber === "7") {
      props.setPokemon({
        ...props.pokemon,
        name: "Glaceon",
        type: "Ice",
        evolved: true,
        weight: 25.9,
        color: "DarkTurquoise",
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/2/23/471Glaceon.png/250px-471Glaceon.png",
        id: 471,
        stone: "",
      });
    } else if (pokemonNumber === "8") {
      props.setPokemon({
        ...props.pokemon,
        name: "Sylveon",
        type: "Fairy",
        evolved: true,
        weight: 23.5,
        color: "Pink",
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/e/e8/700Sylveon.png/250px-700Sylveon.png",
        id: 700,
        stone: "",
      });
    }
  };

  return (
    <Card color={props.pokemon.color}>
      <img src={props.pokemon.image} alt={`Pokemon`} />
      <PokemonName>
        {props.pokemon.name} #{props.pokemon.id}
      </PokemonName>
      <PokemonType>{props.pokemon.type}</PokemonType>
      <p>{props.pokemon.weight}kg</p>
      <p>
        <strong>{props.pokemon.stone}</strong>
      </p>

      <EvolveButton onClick={() => evoluirPokemon(props.pokemon.number)}>
        Evolve!
      </EvolveButton>
    </Card>
  );
};

export default PokemonCard;
