//import React, { useContext } from 'react'
import {Card,Button} from "react-bootstrap"
//import PokemonContext from '../PokemonContext'
import {useDispatch ,useSelector} from "react-redux";
import { setSelectedPokemon } from "../redux/pokemonSlice";

function PokemonDetail() {
  //const { state : {selectedPokemon} , dispatch } = useContext(PokemonContext)
  const dispatch = useDispatch()
  const selectedPokemon = useSelector((state)=> state.pokemon.setSelectedPokemon);
  return selectedPokemon && (
    <Card className='m-5 '>
     
        <Card.Title>{selectedPokemon.name.english}</Card.Title>
        <Card.Body>
        <table>
          <tbody>
           
            {Object.keys(selectedPokemon.base).map((key)=>
                <tr key={key}> 
                    <td>{key}:</td>
                    <td>{selectedPokemon.base[key]}</td>
                 </tr>
                 
                 
            )} 
              
            
        </tbody>  
        </table>
        
        </Card.Body>
        <Button onClick={ () => dispatch(setSelectedPokemon(null)) } > Exit </Button>
        
    </Card>
  )
}

export default PokemonDetail