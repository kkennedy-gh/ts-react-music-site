import React from 'react';

import { Box, Image, Button, Link, Heading, Text } from '@chakra-ui/react';

type SongPageProps = {SongTitle: string, SongDescription: string};

export const SongPage = ({ SongTitle, SongDescription }: SongPageProps) => {
    return (
        <Box width="100%">
        <Heading textAlign="center" width="100%">
            {SongTitle}
        </Heading>
        <Box boxSize="sm" margin="auto">
        <Text>{SongDescription}
        </Text>
        </Box>
        </Box>
    );
}

export default SongPage;