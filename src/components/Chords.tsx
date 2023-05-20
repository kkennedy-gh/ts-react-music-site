import React from "react";

import { Box, Grid, GridItem, Flex, propNames } from "@chakra-ui/react";
import Page from "../components/Page";

export enum GUITAR_STRINGS {
  E_top = 1,
  A,
  D,
  G,
  B,
  E /** auto-incremting enum **/,
}

type Note = {
  GuitarString: GUITAR_STRINGS;
  fret: number;
  FingerNumber: number;
};

type chordProps = {
  notes: Note[];
  noPlay?: noPlay[];
  openPlay?: openPlay[];
};

type noPlay = {
  GuitarString: GUITAR_STRINGS;
  fret: number;
};

type openPlay = {
  GuitarString: GUITAR_STRINGS;
  fret: number;
}

const Chord = (prop: chordProps) => {
  return (
    <Box boxSize="sm" m={8} p={1}>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem> E </GridItem>
        <GridItem> A </GridItem>
        <GridItem> D </GridItem>
        <GridItem> G </GridItem>
        <GridItem> B </GridItem>
        <GridItem> E </GridItem>
      </Grid>

      <Grid alignItems="space-evenly" w="sm" position="absolute" h="80">
        <GridItem bg="grey" w="84%" h="1" />
        <GridItem bg="grey" w="84%" h="1" />
        <GridItem bg="grey" w="84%" h="1" />
        <GridItem bg="grey" w="84%" h="1" />
        <GridItem bg="grey" w="84%" h="1" />
      </Grid>
      <Grid
        justifyContent="space-between"
        w="sm"
        position="absolute"
        templateColumns="repeat(6, 1fr)"
      >
        <GridItem w="7%" h="260" bg="yellow.600" />
        <GridItem w="7%" h="260" bg="yellow.600" />
        <GridItem w="7%" h="260" bg="yellow.600" />
        <GridItem w="7%" h="260" bg="yellow.600" />
        <GridItem w="7%" h="260" bg="yellow.600" />
        <GridItem w="7%" h="260" bg="yellow.600" />
      </Grid>
      <Grid
        position="absolute"
        w="sm"
        h="80"
        templateColumns="repeat(6, 1fr)"
        templateRows="repeat(5, 1fr)"
        justifyContent="center"
      >
        {prop.notes.map((note) => {
          return (
            <GridItem
              bg="black"
              w="80%"
              h="80%"
              colStart={note.GuitarString}
              rowStart={note.fret}
              ml="-37%"
              mt="14%"
              rounded="full"
              color="white"
              textAlign="center"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                w="100%"
                h="100%"
              >
                {note.FingerNumber}
              </Flex>
            </GridItem>
          );
        })}
        {prop.noPlay &&
          prop.noPlay.map((note) => {
            return (
              <GridItem
                bg="black"
                w="80%"
                h="80%"
                colStart={note.GuitarString}
                rowStart={note.fret}
                ml="-37%"
                mt="14%"
                rounded="full"
                color="white"
                textAlign="center"
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  w="100%"
                  h="100%"
                >
                  X
                </Flex>
              </GridItem>
            );
          })}
        {prop.openPlay &&
          prop.openPlay.map((note) => {
            return (
              <GridItem
                bg="white"
                w="80%"
                h="80%"
                colStart={note.GuitarString}
                rowStart={note.fret}
                ml="-37%"
                mt="14%"
                rounded="full"
                border="2px solid black"
                backgroundColor="transparent"
                textAlign="center"
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  w="100%"
                  h="100%"
                >
                </Flex>
              </GridItem>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Chord; 