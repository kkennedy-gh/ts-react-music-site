import { Button, Link, Heading, VStack } from "@chakra-ui/react";
import Page from "../components/Page";

const ChordList = () => {
  return (
    <Page>
      <VStack>
        <Heading textAlign="center" width="100%">
          Chord List
        </Heading>
        <Link href="AChord">
          <Button display="block" margin="auto">
            Chord A Major
          </Button>
        </Link>
        <Link href="AminorChord">
          <Button display="block" margin="auto">
            Chord A Minor
          </Button>
        </Link>
        <Link href="BChord">
          <Button display="block" margin="auto">
            Chord B Major
          </Button>
        </Link>
        <Link href="BflatChord">
          <Button display="block" margin="auto">
            Chord B Flat Major
          </Button>
        </Link>
        <Link href="CMajorChord">
          <Button display="block" margin="auto">
            Chord C Major
          </Button>
        </Link>
        <Link href="C7Chord">
          <Button display="block" margin="auto">
            Chord C7
          </Button>
        </Link>
        <Link href="DChord">
          <Button display="block" margin="auto">
            Chord D Major
          </Button>
        </Link>
        <Link href="DminorChord">
          <Button display="block" margin="auto">
            Chord D Minor
          </Button>
        </Link>
        <Link href="EChord">
          <Button display="block" margin="auto">
            Chord E Major
          </Button>
        </Link>
        <Link href="EminorChord">
          <Button display="block" margin="auto">
            Chord E Minor
          </Button>
        </Link>
        <Link href="FChord">
          <Button display="block" margin="auto">
            Chord F Major
          </Button>
        </Link>
        <Link href="FsharpChord">
          <Button display="block" margin="auto">
            Chord F Sharp
          </Button>
        </Link>
        <Link href="GChord">
          <Button display="block" margin="auto">
            Chord G Major
          </Button>
        </Link>
      </VStack>
    </Page>
  );
};

export default ChordList;