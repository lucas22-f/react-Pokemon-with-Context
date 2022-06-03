//import React, { useContext } from 'react'
import { Form, FormGroup } from 'react-bootstrap'
//import PokemonContext from '../PokemonContext'
import { useDispatch } from 'react-redux'
import { setFilter } from '../redux/pokemonSlice'
function PokemonSearch() {
  //const {dispatch} = useContext(PokemonContext);
  const dispatch = useDispatch();

  return (
    <Form className='w-50 p-3'>
      <FormGroup>

          <Form.Label>Find</Form.Label>
          <Form.Control  type='text'  onChange={(e)=> dispatch(setFilter(e.target.value))}   />
      </FormGroup>
    </Form>
  )
}

export default PokemonSearch