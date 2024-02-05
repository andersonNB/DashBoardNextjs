import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import pokemonReducer from './pokemons/pokemonsSlice';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';

export const store = configureStore({
	reducer: {
		counterReducer,
		pokemon: pokemonReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// vamos a globalizar el useSelectoy y el dispacth
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
