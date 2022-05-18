import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import PokemonContext from '../PokemonContext'
import PokemonRow from "./PokemonRow"
function PokemonTable() {
    const{data,setSelectedPokemon,filter} = useContext(PokemonContext)
  return (
   
    <Table width="100%">
    <thead>
     <tr>
        <th>NAME</th>
        <th>TYPE</th>
     </tr>
     </thead>
     <tbody>
       
       {data.filter(({name:{english}})=> english.toLowerCase().includes(filter.toLocaleLowerCase())).slice(0,14).map((pokemon) =><PokemonRow key={pokemon.id} pokemon={pokemon} />)}

     </tbody>
    </Table>




  )
}

export default PokemonTable