

const PokemonReducer = (state,action) => { // tenemos una funcion en donde recibe x parametros "state" que seria el estado y "action" el setter
    switch (action.type) { // creamos un switch para hacer el manejador del estado 
     
        case "set_Data": 
        return{
          ...state, 
          data: action.payload
        }
        case "set_Filter":
          return{
            ...state,
            filter: action.payload
          }
        case "set_selected_Pokemon":
          return{
            ...state,
            selectedPokemon: action.payload
          }
    
      default:
        return state;
    }
}

export default PokemonReducer;