import { BrowserRouter, Route, Routes } from "react-router-dom";
import Generator from "./components/Generator";
import Nav from "./components/Nav";
import Result from "./components/Result";
import dark from "./assets/night.jpg";
import { useState } from "react";
import TeamGenerator from "./components/TeamGenerator";

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
          <Route path="/" element={<h1>Welcome</h1>} />
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
      {/* <h1>tes</h1> */}
    </div>
  );
}

export default App;
