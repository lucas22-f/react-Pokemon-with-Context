import { useEffect } from "react"
import { Container, Table, Row } from "react-bootstrap"
import PokemonTable from "./componets/PokemonTable";
import PokemonDetail from "./componets/PokemonDetail";
import PokemonSearch from "./componets/PokemonSearch";
import pokeLogo from "./pokeLogo.png"
import PokemonContext from "./PokemonContext";


//uso de Reducers !  en react cuando ya es muy complejo el uso del useState() Utilizamos useReducer() Para crear un Manejador del estado
//donde van cargados los setters del lo que seria nuestro viejo estado ejemplo : 
import { useReducer } from "react";

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


function App() {
 /*  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null) */  //COMO TENEMOS UN REDUCER ENTONCES NO NECESITAMOS DE ESTA CARGA DEL ESTADO 

  const [state,dispatch] = useReducer(PokemonReducer, { data:[] , filter:"", selectedPokemon: null}) // con esta linea inicializamos el estado con
 // con reducer

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'set_Data',
          payload: data
        })
      })
  }, [])

  return (
    <>
      <PokemonContext.Provider value={{ state , dispatch }}>  {/*siempre debemos utilizar useReducer con useContext Para tener globalmente el estado*/}
        <Container>
          <Container className="d-flex align-items-center justify-content-between">
            <img src={pokeLogo} alt="xd" />
            <Row>
              <h1 >Pokemon Finder</h1>
            </Row>
          </Container>


          <div>
            <PokemonSearch ></PokemonSearch>

            <div style={{ display: "grid", gridTemplateColumns: "80% 20%", gridColumnsGap: "3em" }}>

              <PokemonTable ></PokemonTable>

               <div>
                <PokemonDetail ></PokemonDetail>
              </div> 
            </div>

          </div>
        </Container>


      </PokemonContext.Provider>
    </>
  )
}

export default App
