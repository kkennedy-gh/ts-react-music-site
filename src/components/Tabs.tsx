import React from "react";

import { Box, Grid, GridItem, Flex, propNames, Text } from "@chakra-ui/react";
import Page from "../components/Page";

export enum GUITAR_STRINGS {
  E = 1,
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

export type tabProps = {
  notes: Note[];
};

export const Tabs = (prop: tabProps) => { /**check bpm */
  const beatsPerMeaure = 16;
  const linesPerMeaure = 6;
  var measure = "";
  var line = "|";
  var lines = [];
  var lineCount = 6;
  
  for (let linetab = 0; linetab < lineCount; linetab++) {
    line = "|";
  
    for (let newtab = 0; newtab < linesPerMeaure; newtab++) {
      measure = "";
    
      for (let stringline = 0; stringline < beatsPerMeaure; stringline++) {
        measure += "-";
      }
      line += measure;
      line += "|";
    }
    lines.push(line);
  }

  return (
    <Text>
      {lines.map((line) => {
        return <Text>{line}</Text>;
      })}
    </Text>
  );
};


