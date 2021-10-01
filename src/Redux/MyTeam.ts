import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import {PokemonResult} from "../Utils/Constants/API_ResultInterfaces";

export interface TeamState {
    total: number;
    pokemons: PokemonResult[];
}

const initialState: TeamState = {
    total: 0,
    pokemons: []
};

export const teamSlice = createSlice({
    name: 'teamSlice',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addToTeam: (state, action: PayloadAction<PokemonResult>) => {
            const index = state.pokemons.findIndex((el) => el.name === action.payload.name);
            if (index === -1) {
                state.pokemons.push(action.payload)
                state.total += 1;
            }
        },
        removeFromTeam: (state, action: PayloadAction<PokemonResult>) => {
            if(state.total > 0){
                const index = state.pokemons.findIndex((el) => el.name === action.payload.name);
                if (index > -1) {
                    state.pokemons.splice(index, 1);
                    state.total -= 1
                }
            }
        }
    },
    extraReducers: (builder) => {
    },
})

export const { addToTeam, removeFromTeam } = teamSlice.actions;

export const selectTeamTotal = (state: RootState) => state.team.total;
export const selectTeamElements = (state: RootState) => state.team.pokemons;

export default teamSlice.reducer;