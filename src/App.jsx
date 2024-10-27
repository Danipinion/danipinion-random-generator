import { BrowserRouter, Route, Routes } from "react-router-dom";
import Generator from "./pages/Generator";
import Nav from "./components/Nav";
import Result from "./pages/Result";
import { useState } from "react";
import TeamGenerator from "./pages/TeamGenerator";
import Homep from "./pages/Homep";

function App() {
  const [random, setRandom] = useState([]);
  const [teams, setTeams] = useState([]);
  const [dataOld, setDataOld] = useState();
  const [people, setPeople] = useState([]);

  return (
    <div className="">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homep />} />
          <Route
            path="/picker"
            element={
              <Generator
                setRandom={setRandom}
                setTeams={setTeams}
                setDataOld={setDataOld}
                setPeople={setPeople}
                people={people}
                old={dataOld}
              />
            }
          />
          <Route
            path="/teams"
            element={
              <TeamGenerator
                setTeams={setTeams}
                setRandom={setRandom}
                setDataOld={setDataOld}
                setPeople={setPeople}
                people={people}
                old={dataOld}
              />
            }
          />
          <Route
            path="/result"
            element={<Result randoms={random} teams={teams} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
