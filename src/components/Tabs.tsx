import { Box, Grid, GridItem, Flex, propNames, Text } from "@chakra-ui/react";
import React from "react";


export enum GUITAR_STRINGS {
  E_top = 1,
  A,
  D,
  G,
  B,
  e /** auto-incremting enum **/,
}

type Note = {
  GuitarString: GUITAR_STRINGS;
  fret: number;
  FingerNumber: number;
};

type chordProps = {
  notes: Note[];
};

export const Tabs = (prop: chordProps) => {
  const beatsPerMeaure = 16;
  const linesPerMeaure = 6;
  var measure = '';
  var line = '|';
  var lines = [];
  var lineCount = 6;
  for (let i = 0; i < beatsPerMeaure; i++) {
    measure += '-'
  }
  for (let j = 0; j < linesPerMeaure; j++) {
    line += measure;
    line += "|";
  }
  for (let k = 0; k < lineCount; k++) {
    lines.push(line)
  }
  return (
    <Text>
      {lines.map((line) => {
        return (
          <Text>
            {line}
          </Text>
        )
      })
      }
      </Text>
  )
};
