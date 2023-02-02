import { Header } from "../components/Header";
import { Box, Image, Button, Link } from "@chakra-ui/react";

export const ChordList = () => {
  return (
    <Box width="100%">
      <Header />
      <Box boxSize="sm" margin="auto">
        <Link href="AChord">
          <Button display="block" margin="auto">
            Chord A
          </Button>
        </Link>
        <Link href="BChord">
          <Button display="block" margin="auto">
            Chord B
          </Button>
        </Link>
        <Link href="CChord">
          <Button display="block" margin="auto">
            Chord C
          </Button>
        </Link>
        <Link href="DChord">
          <Button display="block" margin="auto">
            Chord D
          </Button>
        </Link>
        <Link href="EChord">
          <Button display="block" margin="auto">
            Chord E
          </Button>
        </Link>
        <Link href="FChord">
          <Button display="block" margin="auto">
            Chord F
          </Button>
        </Link>
        <Link href="GChord">
          <Button display="block" margin="auto">
            Chord G
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
