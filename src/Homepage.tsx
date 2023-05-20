import { Box, Image, Button, Link } from '@chakra-ui/react';
import Page from './components/Page';

const Homepage = () => {
    return (
      <Page>
          <Box boxSize="sm" margin="auto">
          <Image src="a_chord_new.jpg" alt="A chord" />
          <Link href="ChordList">
            <Button display="block" margin="auto">Let's Rock and Roll</Button>
          </Link>
          <Link href="SongList">
            <Button display="block" margin="auto">Go to Songs</Button>
          </Link>
        </Box>
     </Page>
    );
}

export default Homepage;    