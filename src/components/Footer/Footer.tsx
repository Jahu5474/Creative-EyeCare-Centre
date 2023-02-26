import { Box, Flex, Text, Container, Card, CardBody, Stack, Heading, Button, transition } from "@chakra-ui/react";
import Link from 'next/link'

function Footer() {
  return (
    <Container
      maxW="container.lg"
      // centerContent
    >
      <Stack
        display={{base:"flex", md:"flex"}}
        direction={{base:"column", md:"row"}}
        mb={4}
        mt={4}
      >
        <Box>
          <Text 
            fontSize="md"
          >&copy; 2023 Creative Eyecare Centre Inc. All rights reserved.</Text>
        </Box>
      </Stack>
    </Container>
  );
}

export default Footer;
