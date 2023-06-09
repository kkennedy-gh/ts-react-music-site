import React from "react";

import Chord, { GUITAR_STRINGS } from "../components/Chords";
import { Heading } from "@chakra-ui/react";
import Page from "../components/Page";

export const AChord = () => {
  return (
    <Page>
      <Heading textAlign="left" padding={5}>
        A major chord
      </Heading>
      <Chord
        noPlay={[ { GuitarString: GUITAR_STRINGS.E, fret: 1 }]}
        openPlay={[
          { GuitarString: GUITAR_STRINGS.E_high, fret: 1 }, { GuitarString: GUITAR_STRINGS.A, fret: 1 }
        ]}
        notes={[
          { GuitarString: GUITAR_STRINGS.D, fret: 2, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.G, fret: 2, FingerNumber: 2 },
          { GuitarString: GUITAR_STRINGS.B, fret: 2, FingerNumber: 3 },
        ]}
      />
    </Page>
  );
};

export const AminorChord = () => {
  return (
    <Page>
      <Heading textAlign="left" padding={5}>
        A minor chord
      </Heading>
      <Chord
        noPlay={[{ GuitarString: GUITAR_STRINGS.E, fret: 2 }]}
        openPlay={[
          { GuitarString: GUITAR_STRINGS.A, fret: 2 },
          { GuitarString: GUITAR_STRINGS.E_high, fret: 2 },
        ]}
        notes={[
          { GuitarString: GUITAR_STRINGS.D, fret: 2, FingerNumber: 2 },
          { GuitarString: GUITAR_STRINGS.G, fret: 2, FingerNumber: 3 },
          { GuitarString: GUITAR_STRINGS.B, fret: 1, FingerNumber: 1 },
        ]}
      />
    </Page>
  );
};

export const BChord = () => {
  return (
    <Page>
      <Heading textAlign="left" padding={5}>
        B major chord
      </Heading>
      <Chord
        noPlay={[{ GuitarString: GUITAR_STRINGS.E, fret: 1 }]}
        notes={[
          { GuitarString: GUITAR_STRINGS.A, fret: 1, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.D, fret: 1, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.G, fret: 1, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.B, fret: 1, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.E_high, fret: 1, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.D, fret: 3, FingerNumber: 2 },
          { GuitarString: GUITAR_STRINGS.G, fret: 3, FingerNumber: 3 },
          { GuitarString: GUITAR_STRINGS.B, fret: 3, FingerNumber: 4 }
        ]}
      />
    </Page>
  );
};

export const BflatChord = () => {
  return (
    <Page>
      <Heading textAlign="left" padding={5}>
        B flat chord
      </Heading>
      <Chord
        noPlay={[
          { GuitarString: GUITAR_STRINGS.E, fret: 1 },
          { GuitarString: GUITAR_STRINGS.A, fret: 1 },
        ]}
        notes={[
          { GuitarString: GUITAR_STRINGS.E_high, fret: 1, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.D, fret: 3, FingerNumber: 2 },
          { GuitarString: GUITAR_STRINGS.G, fret: 3, FingerNumber: 3 },
          { GuitarString: GUITAR_STRINGS.B, fret: 3, FingerNumber: 4 },
        ]}
      />
    </Page>
  );
};

export const CChord = () => {
  return (
    <Page>
      <Heading textAlign="left" padding={5}>
        C major chord
      </Heading>
      <Chord
        noPlay={[{ GuitarString: GUITAR_STRINGS.E, fret: 1 }]}
        openPlay={[
          { GuitarString: GUITAR_STRINGS.E_high, fret: 1 },
          { GuitarString: GUITAR_STRINGS.G, fret: 1 },
        ]}
        notes={[
          { GuitarString: GUITAR_STRINGS.A, fret: 3, FingerNumber: 3 },
          { GuitarString: GUITAR_STRINGS.D, fret: 2, FingerNumber: 2 },
          { GuitarString: GUITAR_STRINGS.B, fret: 1, FingerNumber: 1 },
        ]}
      />
    </Page>
  );
};

export const C7Chord = () => {
  return (
    <Page>
      <Heading textAlign="left" padding={5}>
        C7 chord
      </Heading>
      <Chord
        noPlay={[{ GuitarString: GUITAR_STRINGS.E, fret: 1 }]}
        openPlay={[{ GuitarString: GUITAR_STRINGS.E_high, fret: 1 }]}
        notes={[
          { GuitarString: GUITAR_STRINGS.A, fret: 3, FingerNumber: 3 },
          { GuitarString: GUITAR_STRINGS.D, fret: 2, FingerNumber: 2 },
          { GuitarString: GUITAR_STRINGS.G, fret: 3, FingerNumber: 4 },
          { GuitarString: GUITAR_STRINGS.B, fret: 1, FingerNumber: 1 },
        ]}
      />
    </Page>
  );
};

export const DChord = () => {
  return (
    <Page>
      <Heading textAlign="left" padding={5}>
        D major chord
      </Heading>
      <Chord
        noPlay={[
          { GuitarString: GUITAR_STRINGS.E, fret: 1 },
          { GuitarString: GUITAR_STRINGS.A, fret: 1 },
        ]}
        openPlay={[{ GuitarString: GUITAR_STRINGS.D, fret: 1 }]}
        notes={[
          { GuitarString: GUITAR_STRINGS.G, fret: 2, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.B, fret: 3, FingerNumber: 3 },
          { GuitarString: GUITAR_STRINGS.E_high, fret: 2, FingerNumber: 2 },
        ]}
      />
    </Page>
  );
};

export const DminorChord = () => {
  return (
    <Page>
      <Heading textAlign="left" padding={5}>
        D minor chord
      </Heading>
      <Chord
        noPlay={[
          { GuitarString: GUITAR_STRINGS.E, fret: 1 },
          { GuitarString: GUITAR_STRINGS.A, fret: 1 },
        ]}
        openPlay={[{ GuitarString: GUITAR_STRINGS.D, fret: 1 }]}
        notes={[
          { GuitarString: GUITAR_STRINGS.G, fret: 2, FingerNumber: 2 },
          { GuitarString: GUITAR_STRINGS.B, fret: 3, FingerNumber: 3 },
          { GuitarString: GUITAR_STRINGS.E_high, fret: 1, FingerNumber: 1 },
        ]}
      />
    </Page>
  );
};

export const EChord = () => {
  return (
    <Page>
      <Heading textAlign="left" padding={5}>
        E major chord
      </Heading>
      <Chord
        openPlay={[
          { GuitarString: GUITAR_STRINGS.E_high, fret: 1 },
          { GuitarString: GUITAR_STRINGS.B, fret: 1 },
          { GuitarString: GUITAR_STRINGS.E, fret: 1 },
        ]}
        notes={[
          { GuitarString: GUITAR_STRINGS.A, fret: 2, FingerNumber: 2 },
          { GuitarString: GUITAR_STRINGS.D, fret: 2, FingerNumber: 3 },
          { GuitarString: GUITAR_STRINGS.G, fret: 1, FingerNumber: 1 },
        ]}
      />
    </Page>
  );
};

export const EminorChord = () => {
  return (
    <Page>
      <Heading textAlign="left" padding={5}>
        E minor chord
      </Heading>
      <Chord
        openPlay={[
          { GuitarString: GUITAR_STRINGS.E_high, fret: 1 },
          { GuitarString: GUITAR_STRINGS.G, fret: 1 },
          { GuitarString: GUITAR_STRINGS.B, fret: 1 },
          { GuitarString: GUITAR_STRINGS.E, fret: 1 },
        ]}
        notes={[
          { GuitarString: GUITAR_STRINGS.A, fret: 2, FingerNumber: 2 },
          { GuitarString: GUITAR_STRINGS.D, fret: 2, FingerNumber: 3 },
        ]}
      />
    </Page>
  );
};

export const FChord = () => {
  return (
    <Page>
      <Heading textAlign="left" padding={5}>
        F major chord
      </Heading>
      <Chord
        noPlay={[
          { GuitarString: GUITAR_STRINGS.E, fret: 1 },
          { GuitarString: GUITAR_STRINGS.A, fret: 1 },
        ]}
        notes={[
          { GuitarString: GUITAR_STRINGS.D, fret: 3, FingerNumber: 3 },
          { GuitarString: GUITAR_STRINGS.E_high, fret: 1, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.G, fret: 2, FingerNumber: 2 },
          { GuitarString: GUITAR_STRINGS.B, fret: 1, FingerNumber: 1 },
        ]}
      />
    </Page>
  );
};

export const FsharpChord = () => {
  return (
    <Page>
      <Heading textAlign="left" padding={5}>
        F sharp chord
      </Heading>
      <Chord
        notes={[
          { GuitarString: GUITAR_STRINGS.E, fret: 2, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.A, fret: 2, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.D, fret: 2, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.G, fret: 2, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.B, fret: 2, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.E_high, fret: 2, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.A, fret: 4, FingerNumber: 3 },
          { GuitarString: GUITAR_STRINGS.D, fret: 4, FingerNumber: 4 },
          { GuitarString: GUITAR_STRINGS.G, fret: 3, FingerNumber: 2 },
        ]}
      />
    </Page>
  );
};

export const GChord = () => {
  return (
    <Page>
      <Heading textAlign="left" padding={5}>
        G major chord
      </Heading>
      <Chord
        openPlay={[
          { GuitarString: GUITAR_STRINGS.D, fret: 1 },
          { GuitarString: GUITAR_STRINGS.G, fret: 1 },
        ]}
        notes={[
          { GuitarString: GUITAR_STRINGS.E, fret: 3, FingerNumber: 2 },
          { GuitarString: GUITAR_STRINGS.A, fret: 2, FingerNumber: 1 },
          { GuitarString: GUITAR_STRINGS.B, fret: 3, FingerNumber: 3 },
          { GuitarString: GUITAR_STRINGS.E_high, fret: 3, FingerNumber: 4 },
        ]}
      />
    </Page>
  );
};
