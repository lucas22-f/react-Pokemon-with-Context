import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import {setSelectedPokemon} from "../redux/pokemonSlice"
import {useDispatch} from "react-redux"
//import PokemonContext from '../PokemonContext'
function PokemonRow({pokemon}) {
  const dispatch = useDispatch();
  //const{dispatch} = useContext(PokemonContext)
  return (
    <>
    <tr>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(", ")}</td>
        <td><Button variant='dark' onClick={()=>dispatch(setSelectedPokemon(pokemon))} >Detail</Button></td>
    </tr>
    </>
  )
}

export default PokemonRow