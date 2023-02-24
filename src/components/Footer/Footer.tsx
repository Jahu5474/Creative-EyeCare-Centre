import { Box, Flex, Text, Container, Card, CardBody, Stack, Heading, Button, transition } from "@chakra-ui/react";
import Link from 'next/link'

function Footer() {
  return (
    <Container
      maxW="container.lg"
      centerContent
    >
      <Flex as="footer" mt={6} mb={6}>
      <Box flex="1">
        <Text fontSize="md">&copy; 2023 Creative Eyecare Centre Inc. All rights reserved.</Text>
      </Box>
    </Flex>
    </Container>
  );
}

export default Footer;
