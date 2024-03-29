import { PokemonCard, SimplePokemon } from "@/app/dashboard/pokemons";
import Image from "next/image";


interface Props {
    pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
    return (
        <div className='flex flex-wrap gap-10 items-center justify-center'>
            {
                pokemons.map(pokemon => {
                    return (
                        <PokemonCard pokemon={pokemon} key={pokemon.id} />
                    )
                })
            }
        </div>
    )
}