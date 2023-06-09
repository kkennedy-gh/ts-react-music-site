import React from 'react';

import { Button, Link, Heading, VStack } from '@chakra-ui/react';
import Page from "../components/Page";

const SongList = () => {
  return (
    <Page>
      <VStack>
        <Heading textAlign="center" width="100%">
          Song List
        </Heading>
        <Link href="Song_1">
          <Button display="block" margin="auto">
            Song 1
          </Button>
        </Link>
        <Link href="Song_2">
          <Button display="block" margin="auto">
            Song 2
          </Button>
        </Link>
        <Link href="Song_3">
          <Button display="block" margin="auto">
            Song 3
          </Button>
        </Link>
        <Link href="Song_4">
          <Button display="block" margin="auto">
            Song 4
          </Button>
        </Link>
        <Link href="Song_5">
          <Button display="block" margin="auto">
            Song 5
          </Button>
        </Link>
      </VStack>
    </Page>
  );
};

export default SongList;