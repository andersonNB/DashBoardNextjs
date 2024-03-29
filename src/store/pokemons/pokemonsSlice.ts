import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {SimplePokemon} from '@/pokemons';

interface PokemonsState {
	favorites:{[key: string]: SimplePokemon;}
}


const getInitialState = ():PokemonsState => {

	const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') || '{}');
	console.log('getInatialState: ');
	return favorites;
}

const initialState: PokemonsState = {
	favorites: {},
	// '1': {id: '1', name: 'bulbasaur'},
	// '3': {id: '3', name: 'bulbasaur'},
	// ...getInitialState(),
};

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {


		setFavoritePokemons(state, action:PayloadAction<{[key: string]: SimplePokemon}>){
			state.favorites = action.payload;
		},

		toggleFavorite(state, action:PayloadAction<SimplePokemon> ){

			const pokemon = action.payload;
			const {id} = pokemon;

			if(!!state.favorites[id]){
				delete state.favorites[id];
				// return;
			}else{
				state.favorites[id] = pokemon;
			}


			//TODO: No se debe hacer en Redux
			//esto se considera efecto secundario
			localStorage.setItem('favorite-pokemons', JSON.stringify(state));

		},
	},
});

export const {toggleFavorite,setFavoritePokemons} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
