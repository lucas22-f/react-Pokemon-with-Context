import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import PokemonContext from '../PokemonContext'
function PokemonRow({pokemon}) {

  const{setSelectedPokemon} = useContext(PokemonContext)
  return (
    <>
    <tr>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(", ")}</td>
        <td><Button variant='dark' onClick={()=>setSelectedPokemon(pokemon)} >Detail</Button></td>
    </tr>
    </>
  )
}

export default PokemonRow