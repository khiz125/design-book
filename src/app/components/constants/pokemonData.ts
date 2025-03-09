export const POKEMON_DATA: Pokemon[] = [
  {
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    description:
      "A strange seed was planted on its back at birth.The plant sprouts and grows with this POKéMON.",
  },
  {
    name: "ivysaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    description: "When the bulb on its back grows large, it appearsto lose the ability to stand on its hind legs.",
  },
  {
    name: "Charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
  },
  {
    name: "Squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    description:
      "quirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
  },
  {
    name: "Caterpie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    description:
      "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
  },
  {
    name: "Butterfree",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    description:
      "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
  },
  {
    name: "Beedrill",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    description:
      "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
  },
  {
    name: "Pidgeotto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    description:
      "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
  },
  {
    name: "Spearow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    description:
      "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.",
  },
  {
    name: "Ekans",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    description:
      "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.",
  },
  {
    name: "Pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    description:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
  },
  {
    name: "Sandshrew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    description:
      "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.",
  },
];

export type Pokemon = {
  name: string;
  image: string;
  description: string;
};
