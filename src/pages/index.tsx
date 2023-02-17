import { NextPage } from 'next';
import {Box, Flex, Container, Image, Heading, Text, Stack, Button, Card, CardBody, Divider, CardFooter, ButtonGroup} from "@chakra-ui/react"
import Link from 'next/link'
import { motion, MotionConfig, motionValue, useTransform } from 'framer-motion'
import styles from '@emotion/styled'

const Home: NextPage = ()=>(
  <Container
    display="flex"
    mt="30px"
    m="auto"
    maxW="container.lg"
    minH="60vh"
    centerContent
  >
    <Stack
      display={{ base: "flex", md: "flex" }}
      direction={{ base: "column", md: "row" }}
      width={{ base: "auto", md: "none" }}
      flexGrow={1}
      align="center"
      spacing={4}
      mt={6}

    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 5 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          mr={2}
          textAlign="center"
        >
          <Heading>Creative <Text as="span" color="orange.400">EyeCare</Text> Centre Inc.</Heading>
          <Text p="10px" fontSize="lg" fontWeight="bold">
            Proudly serving you in Downtown Vancouver, BC since 1996.
            Get the best selection of eyewear and contact lenses.
          </Text>

          <Flex
            gap={{ base: "2", md: "10" }}
            direction={{ base: "column", md: "row" }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/shop">
                <Button
                  border="1px solid gray"
                  size="lg"
                  variant="outline"
                  _hover={{
                    color: "orange",
                    borderColor: "orange"
                  }}
                >
                  Shop Online
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/instore">
                <Button
                  border="1px solid gray"
                  size="lg"
                  variant="outline"
                  _hover={{
                    color: "orange",
                    borderColor: "orange"
                  }}
                >
                  Shop Instore
                </Button>
              </Link>
            </motion.div>
          </Flex>

        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: -5 }}
        transition={{ duration: 0.8 }}
      >
        <Box>
          <Image
            boxShadow="lg"
            objectFit="cover"
            borderRadius="md"
            src="/images/jimin.png" alt="jimin" />
        </Box>
      </motion.div>
    </Stack>
    <Stack direction="column" alignSelf="start">
        <Heading size="lg">Best Seller</Heading>
      </Stack>
    <Divider p="5px"/>
    <Flex
      align="center"
      h="50vh"
    >
      
      <Stack
        display={{ base: "flex", md: "flex" }}
        direction={{ base: "column", md: "row" }}
        width={{ base: "auto", md: "none" }}
        spacing={5}
      >
        <Card maxW='xs'>
          <CardBody>
            <Image
              src='/images/DAILIES-TOTAL-90PACK.png'
              alt='Total'
              borderRadius='md' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Dailies Total 90PK</Heading>
              <Text color='orange.400' fontSize='2xl'>
                $86
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card maxW='xs'>
          <CardBody>
            <Image
              src='/images/AIR-OPTIX-PLUS-6PACK.png'
              alt='Optix'
              borderRadius='md' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Air Optix Plus 6PK</Heading>
              <Text color='orange.400' fontSize='2xl'>
                $86
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card maxW='xs'>
          <CardBody>
            <Image
              src='/images/ACUVUE-OASYS-12PACK.png'
              alt='Oasys'
              borderRadius='md' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Dailies Total 90PK</Heading>
              <Text color='orange.400' fontSize='2xl'>
                $86
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card maxW='xs'>
          <CardBody>
            <Image
              src='/images/1-DAY-MOIST-90PACK.png'
              alt='Moist'
              borderRadius='md' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Dailies Total 90PK</Heading>
              <Text color='orange.400' fontSize='2xl'>
                $86
              </Text>
            </Stack>
          </CardBody>
        </Card>
        
      </Stack>
    </Flex>
  </Container>

);

export default Home;
