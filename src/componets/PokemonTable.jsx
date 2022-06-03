import React, {useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { setData } from '../redux/pokemonSlice'
//import PokemonContext from '../PokemonContext'
import PokemonRow from "./PokemonRow"
function PokemonTable() {
    //const{ state:{data,filter} } = useContext(PokemonContext) // traigo el estado desestructurado 
    const{data,filter} = useSelector((state)=> state.pokemon); // con REDUX JS 
    const dispatch = useDispatch();
    useEffect(() => {
      fetch("http://localhost:3000/pokemon.json")
        .then(res => res.json())
        .then(data => dispatch(setData(data)))
        
    }, [])
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