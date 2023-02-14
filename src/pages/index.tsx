import { NextPage } from 'next';
import {Box, Flex, Container, Image, Heading} from "@chakra-ui/react"
import styles from '@emotion/styled'

const Home: NextPage = ()=>{
  return (

      <Container
        display="flex"
        mt="20px"
        maxW="container.lg"
      >
        <Box
          width="50%"
          display="flex"
          alignItems="center"
        >
          <Heading>Creative EyeCare Centre Inc.</Heading>
        </Box>
        <Box
          width="50%"
        >
          <Image 
            boxSize="sm" 
            borderRadius="full"
            src="/images/jimin.png" alt="jimin"/>
        </Box>
      </Container>

  )
};

export default Home;
