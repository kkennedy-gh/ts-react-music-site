import * as React from "react";

import { Box, Image, Button, HStack, Heading, Link, extendTheme } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack spacing={5} width="100%" backgroundColor="black" padding={5} mb={5}>
      <Heading textAlign="left" width="100%" backgroundColor="forestgreen">
        Song Depot
      </Heading>
      <Link href="/">
        <Button>Song Depot</Button>
      </Link>
      <Link href="SongList">
        <Button>Songs</Button>
      </Link>
      <Link href="ChordList">
        <Button>Chords</Button>
      </Link>
    </HStack>
  );
};

export default Header;
// React multiple element component when using ChakraUI = "<Box></Box>" or JSX "Fragment" = "<></>"
