import { useState, useEffect, useContext, createContext } from "react"
import { Container, Table, Row } from "react-bootstrap"
import PokemonTable from "./componets/PokemonTable";
import PokemonDetail from "./componets/PokemonDetail";
import PokemonSearch from "./componets/PokemonSearch";
import pokeLogo from "./pokeLogo.png"
import PokemonContext from "./PokemonContext";






function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <>
      <PokemonContext.Provider value={{ data, setData, filter, setFilter, selectedPokemon, setSelectedPokemon }}>
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
                {selectedPokemon && <PokemonDetail {...selectedPokemon}></PokemonDetail>}
              </div>
            </div>

          </div>
        </Container>


      </PokemonContext.Provider>
    </>
  )
}

export default App
