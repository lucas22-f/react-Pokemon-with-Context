import { useEffect } from "react"
import { Container, Table, Row } from "react-bootstrap"
import PokemonTable from "./componets/PokemonTable";
import PokemonDetail from "./componets/PokemonDetail";
import PokemonSearch from "./componets/PokemonSearch";
import pokeLogo from "./pokeLogo.png"
import PokemonContext from "./PokemonContext";
import PokemonReducer from "./PokemonReducers";

//uso de Reducers !  en react cuando ya es muy complejo el uso del useState() Utilizamos useReducer() Para crear un Manejador del estado
//donde van cargados los setters del lo que seria nuestro viejo estado ejemplo : 
import { useReducer } from "react";

function App() {
 /*  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null) */  //COMO TENEMOS UN REDUCER ENTONCES NO NECESITAMOS DE ESTA CARGA DEL ESTADO 

  // version anterior con useReducer ! const [state,dispatch] = useReducer(PokemonReducer, { data:[] , filter:"", selectedPokemon: null}) // con esta linea inicializamos el estado con
 // con reducer



  return (
    <>
      {/* <PokemonContext.Provider value={{ state , dispatch }}>  {/*siempre debemos utilizar useReducer con useContext Para tener globalmente el estado*/}
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


     {/*  </PokemonContext.Provider> */}
    </>
  )
}

export default App
