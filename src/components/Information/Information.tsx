import React from 'react';
import { Stack, Box, Heading, Text, Container, Image } from '@chakra-ui/react'
import Link from 'next/link'


const Information = () => {
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
          <Heading size='md'>Connect with Us</Heading>
          <Stack
            display={{ base: "flex", md: "flex" }}
            direction={{ base: "column", md: "row" }}
            spacing='5'
            mt={3}
          >
            <Box boxSize="30px">
              <Link href="https://www.instagram.com/creative_eyecare/">
                <Image src="/images/instagram.png" alt="ig" />
              </Link>
            </Box>
            <Box boxSize="30px">
              <Link href="https://www.facebook.com/profile.php?id=100084126632360">
                <Image src="/images/facebook.png" alt="fb" />
              </Link>
            </Box>
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
                  color: "orange.400",
                  transition: "color 0.3s ease"
                }}
              >
                Terms of Condition
              </Text>
            </Link>

            <Link href="/termsofcondition">
              <Text
                _hover={{
                  color: "orange.400",
                  transition: "color 0.3s ease"
                }}
              >
                Privacy Policy
              </Text>
            </Link>

            <Link href="/termsofcondition">
              <Text
                _hover={{
                  color: "orange.400",
                  transition: "color 0.3s ease"
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
    </Container>
  )
}

export default Information;