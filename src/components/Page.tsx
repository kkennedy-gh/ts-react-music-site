import React from 'react';

import Header from './Header';
import { Box } from '@chakra-ui/react';

// create styling for this song page
// "generic song page component"
// use const ......
type PageProps = {
    children: React.ReactNode;
}

const Page = ({children} : PageProps) => {
    return (
      <Box width="100%" bg='blue'>
        <Header />
        {children}
      </Box>
    );
}

// Use Chakra styling - review documentation on CSS styling



export default Page;