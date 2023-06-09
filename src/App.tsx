import React, { useState } from "react";

import Homepage from "./Homepage";
import {
  AChord,
  AminorChord,
  BChord,
  BflatChord,
  CChord,
  C7Chord,
  DChord,
  DminorChord,
  EChord,
  EminorChord,
  FChord,
  FsharpChord,
  GChord,
} from "./pages/a_thru_g_chords";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ChordList from "./pages/ChordList";
import SongTitle from "./pages/SongTitle";
import { Tabs } from "./components/Tabs";
import { GUITAR_STRINGS } from "./components/Tabs";
import SongList from "./pages/SongList";
import SongPage from "./components/SongPage";
import Page from "./components/Page";

const App = () => {
  const [isLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="AChord" element={<AChord />} />
          <Route path="AminorChord" element={<AminorChord />} />
          <Route path="BChord" element={<BChord />} />
          <Route path="BflatChord" element={<BflatChord />} />
          <Route path="CMajorChord" element={<CChord />} />
          <Route path="C7Chord" element={<C7Chord />} />
          <Route path="DChord" element={<DChord />} />
          <Route path="DminorChord" element={<DminorChord />} />
          <Route path="EChord" element={<EChord />} />
          <Route path="EminorChord" element={<EminorChord />} />
          <Route path="FChord" element={<FChord />} />
          <Route path="FsharpChord" element={<FsharpChord />} />
          <Route path="GChord" element={<GChord />} />
          <Route path="ChordList" element={<ChordList />} />
          <Route path="SongTitle" element={<SongTitle />} />
          <Route path="SongList" element={<SongList />} />
          <Route
            path="Song_1"
            element={
              <SongPage
                SongTitle={"Song 1"}
                SongDescription={"Rock Song"}
                TabProps={{ notes: [] }}
              />
            }
          />
          <Route
            path="Song_2"
            element={
              <SongPage
                SongTitle={"Song 2"}
                SongDescription={"Rhythm and Blues Song"}
                TabProps={{ notes: [] }}
              />
            }
          />
          <Route
            path="Song_3"
            element={
              <SongPage
                SongTitle={"Song 3"}
                SongDescription={"Jazz Song"}
                TabProps={{ notes: [] }}
              />
            }
          />
          <Route
            path="Song_4"
            element={
              <SongPage
                SongTitle={"Song 4"}
                SongDescription={"Reggae Song"}
                TabProps={{ notes: [] }}
              />
            }
          />
          <Route
            path="Song_5"
            element={
              <SongPage
                SongTitle={"Song 5"}
                SongDescription={"Heavy Metal Song"}
                TabProps={{ notes: [] }}
              />
            }
          />
          <Route
            path="Tabs"
            element={
              <Tabs
                notes={[
                  { GuitarString: GUITAR_STRINGS.D, fret: 2, FingerNumber: 1 },
                  { GuitarString: GUITAR_STRINGS.G, fret: 2, FingerNumber: 2 },
                  { GuitarString: GUITAR_STRINGS.B, fret: 2, FingerNumber: 3 },
                ]}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;