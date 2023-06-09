import React from 'react';

import Page from "../components/Page";
import { Box, Image, Button, Link, Heading, Text, Tab } from '@chakra-ui/react';
import { Tabs, tabProps } from '../components/Tabs';

type SongPageProps = { SongTitle: string, SongDescription: string, TabProps: tabProps};

const SongPage = ({ SongTitle, SongDescription, TabProps }: SongPageProps) => {
    return (
      <Page>
        <Heading as="h5" size="sm" textAlign="center" width="100%">
          {SongTitle}
        </Heading>
        <Box boxSize="xl" margin="auto">
          <Text>{SongDescription}</Text>
          <Tabs {...TabProps} />
        </Box>
      </Page>
    );
}

export default SongPage;