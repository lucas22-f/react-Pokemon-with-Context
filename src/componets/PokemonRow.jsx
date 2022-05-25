import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import PokemonContext from '../PokemonContext'
function PokemonRow({pokemon}) {

  const{dispatch} = useContext(PokemonContext)
  return (
    <>
    <tr>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(", ")}</td>
        <td><Button variant='dark' onClick={()=>dispatch({type:"set_selected_Pokemon",payload:pokemon})} >Detail</Button></td>
    </tr>
    </>
  )
}

export default PokemonRow