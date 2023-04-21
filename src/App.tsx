import React, { useState } from "react";
import { Homepage } from "./Homepage";
import {
  AChord,
  BChord,
  CChord,
  DChord,
  EChord,
  FChord,
  GChord,
} from "./pages/a_thru_g_chords";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ChordList } from "./pages/ChordList";
import { SongTitle } from "./pages/SongTitle";
import { Tabs } from "./components/Tabs";
import { GUITAR_STRINGS } from "./components/Tabs";
import { SongList } from "./pages/SongList";
import { SongPage } from "./components/SongPage";
export const App = () => {
  const [isLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="AChord" element={<AChord />} />
          <Route path="BChord" element={<BChord />} />
          <Route path="CChord" element={<CChord />} />
          <Route path="DChord" element={<DChord />} />
          <Route path="EChord" element={<EChord />} />
          <Route path="FChord" element={<FChord />} />
          <Route path="GChord" element={<GChord />} />
          <Route path="ChordList" element={<ChordList />} />
          <Route path="SongTitle" element={<SongTitle />} />
          <Route path="SongList" element={<SongList />} />
          <Route
            path="Song_1"
            element={
              <SongPage SongTitle={"Song 1"} SongDescription={"Song 1"} />
            }
          />
          <Route
            path="Song_2"
            element={
              <SongPage SongTitle={"Song 2"} SongDescription={"Song 2"} />
            }
          />
          <Route
            path="Song_3"
            element={
              <SongPage SongTitle={"Song 3"} SongDescription={"Song 3"} />
            }
          />
          <Route
            path="Song_4"
            element={
              <SongPage SongTitle={"Song 4"} SongDescription={"Song 4"} />
            }
          />
          <Route
            path="Song_5"
            element={
              <SongPage SongTitle={"Song 5"} SongDescription={"Song 5"} />
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
