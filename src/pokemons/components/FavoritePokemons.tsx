'use client'
import React, { useState } from 'react'
import { useAppSelector } from '@/store';
// import { PokemonGrid } from '@/app/dashboard/pokemons';
import { PokemonGrid } from './PokemonGrid';
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritePokemons = () => {

    const FavoritPokemons = useAppSelector(state => Object.values((state.pokemons)));


    const [pokemons, setPokemons] = useState(FavoritPokemons);

    // console.log(pokemons);


  return (

    pokemons.length === 0 
    ? <NoFavorites />
    : <PokemonGrid pokemons={pokemons} />

   
  )
}

export const NoFavorites = () => {
    return (
        <div className='flex flex-col h-[50vh] items-center justify-center'>
            <IoHeartOutline size={100} className="text-red-500" />
            <span className='text-5xl my-2'>No tienes pokémons favoritos</span>
        </div>
    )
}
