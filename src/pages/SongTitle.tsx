import React from "react";

import Header from "../components/Header";
import { Box, Image, Button, Link, Heading } from "@chakra-ui/react";
import { Tabs } from "../components/Tabs";
import Page from "../components/Page";

const SongTitle = () => {
  return (
    <Box width="100%">
      <Header />
          <Heading fontSize="xl">Come As Your Are</Heading>
          <Tabs notes={[]} />
    </Box>
  );
};

export default SongTitle;