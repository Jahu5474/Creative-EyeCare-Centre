import { NextPage } from 'next';
import {Box, Flex, Container, Image, Heading, Text, Stack} from "@chakra-ui/react"
import styles from '@emotion/styled'

const Home: NextPage = ()=>{
  return (
      <Container
        display="flex"
        mt="30px"
        maxW="container.lg"
      >
      <Stack
      display={{base:"flex",md:"flex"}}
      direction={{base:"column", md:"row"}}
      width={{base:"auto", md:"none"}}
      flexGrow={1}
      align="center"
    >
        <Box
          width="50%"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          mr={2}
        >
          <Heading>Creative EyeCare Centre Inc.</Heading>
          <Text p="10px">
            Proudly serving you in Downtown Vancouver, BC since 1996.
            Get the best selection of eyewear and contact lenses.
          </Text>
        </Box>
        <Box
          width="50%"
        >
          <Image 
            display={{base:"none", md:"flex"}}
            boxShadow="lg"
            objectFit="cover"
            borderRadius="md"
            src="/images/jimin.png" alt="jimin"/>
        </Box>
      </Stack>
      </Container>


  )
};

export default Home;
