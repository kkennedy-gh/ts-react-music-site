import * as React from "react";

import { Box, Button, HStack, Heading, Link } from "@chakra-ui/react";
import Page from "./Page";

const Header = () => {
  return (
    <HStack spacing="24px" width="100%" backgroundColor="">
      <Heading textAlign="center" width="100%" backgroundColor="green">
        Song Depot
      </Heading>
      <Link href="SongList">
        <Button>Songs</Button>
      </Link>n
      <Link href="ChordList">
        <Button>Chords</Button>
      </Link>
    </HStack>
  );
};

export default Header;
// React multiple element component when using ChakraUI = "<Box></Box>" or JSX "Fragment" = "<></>"
