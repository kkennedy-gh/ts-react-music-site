import React from 'react';

import { Box, Image, Button, Link, Heading } from '@chakra-ui/react';

export const SongList = () => {
  return (
    <Box width="100%">
      <Heading textAlign="center" width="100%">
        Song List
      </Heading>
      <Box boxSize="sm" margin="auto">
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
      </Box>
    </Box>
  );
};

export default SongList;