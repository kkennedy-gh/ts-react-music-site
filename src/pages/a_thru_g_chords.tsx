import React from 'react';

import Chord, { GUITAR_STRINGS } from "../components/Chords";
import { Box, Heading } from "@chakra-ui/react";
import Page from "../components/Page";

export const AChord = () => {
      return (
        <Box boxSize="sm">
          <Heading>A chord</Heading>
          <Chord
            noPlay={[{ GuitarString: GUITAR_STRINGS.E_top, fret: 2 }]}
            openPlay={[{ GuitarString: GUITAR_STRINGS.A, fret: 2 }, { GuitarString: GUITAR_STRINGS.E, fret: 2 }]} 
            notes={[
              { GuitarString: GUITAR_STRINGS.D, fret: 2, FingerNumber: 1 },
              { GuitarString: GUITAR_STRINGS.G, fret: 2, FingerNumber: 2 },
              { GuitarString: GUITAR_STRINGS.B, fret: 2, FingerNumber: 3 },
            ]}
          />
        </Box>
      );  
};

export const BChord = () => {
    return (
        <Box boxSize="sm">
        <Heading>B Chord</Heading>
        <Chord
          notes={[
            { GuitarString: GUITAR_STRINGS.A, fret: 2, FingerNumber: 1 },
            { GuitarString: GUITAR_STRINGS.D, fret: 2, FingerNumber: 1 },
            { GuitarString: GUITAR_STRINGS.G, fret: 2, FingerNumber: 1 },
            { GuitarString: GUITAR_STRINGS.B, fret: 2, FingerNumber: 1 },
            { GuitarString: GUITAR_STRINGS.E, fret: 2, FingerNumber: 1 },
            { GuitarString: GUITAR_STRINGS.D, fret: 4, FingerNumber: 2 },
            { GuitarString: GUITAR_STRINGS.G, fret: 4, FingerNumber: 3 },
            { GuitarString: GUITAR_STRINGS.B, fret: 4, FingerNumber: 4 },
          ]}
        />
      </Box>
    );
};
    
    export const CChord = () => {
        return (
          <Chord
            noPlay={[
                    { GuitarString: GUITAR_STRINGS.E_top, fret: 3 },
            ]}
            notes={[
              { GuitarString: GUITAR_STRINGS.A, fret: 3, FingerNumber: 3 },
              { GuitarString: GUITAR_STRINGS.D, fret: 2, FingerNumber: 2 },
              { GuitarString: GUITAR_STRINGS.B, fret: 1, FingerNumber: 1 },
            ]}
          />
        );
    };
    export const DChord = () => {
        return (
            <Chord
                notes={[
                    { GuitarString: GUITAR_STRINGS.G, fret: 2, FingerNumber: 1 },
                    { GuitarString: GUITAR_STRINGS.B, fret: 3, FingerNumber: 3 },
                    { GuitarString: GUITAR_STRINGS.E, fret: 2, FingerNumber: 2 },
                ]}
            />
        );
    };

    export const EChord = () => {
        return (
            <Chord
                notes={[
                    { GuitarString: GUITAR_STRINGS.A, fret: 2, FingerNumber: 2 },
                    { GuitarString: GUITAR_STRINGS.D, fret: 2, FingerNumber: 3 },
                    { GuitarString: GUITAR_STRINGS.G, fret: 1, FingerNumber: 1 },
                ]}
            />
        );
    };

    export const FChord = () => {
        return (
            <Chord
                notes={[
                    { GuitarString: GUITAR_STRINGS.A, fret: 3, FingerNumber: 3 },
                    { GuitarString: GUITAR_STRINGS.D, fret: 3, FingerNumber: 4 },
                    { GuitarString: GUITAR_STRINGS.G, fret: 2, FingerNumber: 2 },
                    { GuitarString: GUITAR_STRINGS.B, fret: 1, FingerNumber: 1 },
                ]}
            />
        );
    };

    export const GChord = () => {
        return (
          <Chord
            notes={[
              { GuitarString: GUITAR_STRINGS.E_top, fret: 3, FingerNumber: 2 },
              { GuitarString: GUITAR_STRINGS.A, fret: 2, FingerNumber: 1 },
              { GuitarString: GUITAR_STRINGS.B, fret: 3, FingerNumber: 3 },
              { GuitarString: GUITAR_STRINGS.E, fret: 3, FingerNumber: 4 },
            ]}
          />
        );
    };
 
