import React, { useContext } from 'react'
import { Form, FormGroup } from 'react-bootstrap'
import PokemonContext from '../PokemonContext'

function PokemonSearch() {
  const {dispatch} = useContext(PokemonContext);
  return (
    <Form className='w-50 p-3'>
      <FormGroup>

          <Form.Label>Find</Form.Label>
          <Form.Control  type='text'  onChange={(e)=> dispatch({ type:"set_Filter", payload: e.target.value })}   />
      </FormGroup>
    </Form>
  )
}

export default PokemonSearch