import React, { useContext } from 'react'
import {Card,Button} from "react-bootstrap"
import PokemonContext from '../PokemonContext'

function PokemonDetail() {
  const { state : {selectedPokemon} , dispatch } = useContext(PokemonContext)
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
        <Button onClick={ () => dispatch({type:"set_selected_Pokemon",payload:null}) } > Exit </Button>
        
    </Card>
  )
}

export default PokemonDetail