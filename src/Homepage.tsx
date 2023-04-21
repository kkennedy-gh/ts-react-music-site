import { Header } from './components/Header';
import { Box, Image, Button, Link } from '@chakra-ui/react'

export const Homepage = () => {
    return (
      <Box width="100%">
        <Header />
          <Box boxSize="sm" margin="auto">
          <Image src="a_chord_new.jpg" alt="A chord" />
          <Link href="ChordList">
            <Button display="block" margin="auto">Let's Rock and Roll</Button>
          </Link>
          <Link href="SongList">
            <Button display="block" margin="auto">Go to Songs</Button>
          </Link>
        </Box>
      </Box>
    );
}

    