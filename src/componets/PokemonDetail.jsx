import React, { useContext } from 'react'
import {Card,Button} from "react-bootstrap"
import PokemonContext from '../PokemonContext'

function PokemonDetail({ name:{english}, base }) {
  const {setSelectedPokemon} = useContext(PokemonContext)
  return (
    <Card className='m-5 '>
        <Card.Title>{english}</Card.Title>
        <Card.Body>
        <table>
          <tbody>
           
            {Object.keys(base).map((key)=>
                <tr key={key}> 
                    <td>{key}:</td>
                    <td>{base[key]}</td>
                 </tr>
                 
                 
            )} 
            {console.log(english)}     
            
        </tbody>  
        </table>
        
        </Card.Body>
        <Button onClick={ () => setSelectedPokemon(null) } > Exit </Button>
        
    </Card>
  )
}

export default PokemonDetail