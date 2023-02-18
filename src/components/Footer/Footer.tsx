import { Box, Flex, Text, Container, Card, CardBody, Stack, Heading, Button, transition } from "@chakra-ui/react";
import Link from 'next/link'

function Footer() {
  return (
    <Container
      maxW="container.lg"
    >
    <Stack
      display={{ base: "flex", md: "flex" }}
      direction={{ base: "column", md: "row" }}
      width={{ base: "auto", md: "none" }}
      spacing={5}
      mt="4"
      mb="4"
      justify="space-between"
    >
        <Box maxW="xs">
          <Stack spacing='3'>
            <Heading size='md'>About Us</Heading>
              <Text fontSize='md' alignSelf="start">
                Creative Eyecare Centre, a Robson Street Staple in Vancouver BC, offers a professional eyewear experience where you can find in vogue frames and sunglasses, contact lenses from the most innovative manufacturers, and comprehensive sight testing from our experienced opticians.
              </Text>
          </Stack>
        </Box>

        <Box
          maxW="sm"
        >
            <Stack spacing='3'>
              <Heading size='md'>Information</Heading>
                <Link href="/termsofcondition">
                  <Text
                    _hover={{
                      color:"orange.400",
                      transition:"color 0.3s ease"
                    }}
                  >
                    Terms of Condition
                  </Text>
                </Link>

                <Link href="/termsofcondition">
                  <Text
                    _hover={{
                      color:"orange.400",
                      transition:"color 0.3s ease"
                    }}
                  >
                    Privacy Policy
                  </Text>
                </Link>

                <Link href="/termsofcondition">
                  <Text
                    _hover={{
                      color:"orange.400",
                      transition:"color 0.3s ease"
                    }}
                  >
                    Returns, Warranty, and Shipping
                  </Text>
                </Link>
            </Stack>
        </Box>

        <Box maxW="sm">
          <Stack spacing='3'>
            <Heading size='md' >Contact Us</Heading>
              <Text fontSize='md'>
                1120 Robson Street Vancouver, BC, V63 1B2
              </Text>
              <Text>
                (604)423-3603
              </Text>
              <Text>
                info@creativeeyecare.com
              </Text>
              <Text>
                11am - 6pm
              </Text>
          </Stack>
        </Box>
        </Stack>

      <Flex as="footer" mt={6} mb={6}>
      <Box flex="1">
        <Text fontSize="md">&copy; 2023 Creative Eyecare Centre Inc. All rights reserved.</Text>
      </Box>
    </Flex>
    </Container>
  );
}

export default Footer;
