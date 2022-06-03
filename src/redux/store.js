import { configureStore } from "@reduxjs/toolkit";
//traer el slice y meterlo en store
import pokemonReducer from "./pokemonSlice";
export const  store = configureStore({
    reducer:{
        pokemon:pokemonReducer
    }
})

