import React from 'react';

import Header from './Header'
import Page from "../components/Page";
import { Box, Image, Button, Link, Heading, Text } from '@chakra-ui/react';

type SongPageProps = {SongTitle: string, SongDescription: string};

const SongPage = ({ SongTitle, SongDescription }: SongPageProps) => {
    return (
      <Box width="100%">
        <Header />
        <Heading as="h5" size="sm" textAlign="center" width="100%">
          {SongTitle}
        </Heading>
        <Box boxSize="sm" margin="auto">
          <Text>{SongDescription}</Text>
        </Box>
      </Box>
    );
}

export default SongPage;