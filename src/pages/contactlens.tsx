import React from 'react';
import { Box, Container, Stack, Image, Text, Heading, Card, CardBody, Divider } from '@chakra-ui/react'
import Link from 'next/link';
import {motion} from 'framer-motion'

const contactlens = () =>{
    return(
        <>
            <Container
                display="flex"
                mt="30px"
                m="auto"
                maxW="container.lg"
                minH="100vh"
                centerContent
            >
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, x: 2}}
                transition={{duration:0.8}}
            >
                
                <Stack
                    display={{ base: "flex", md: "flex" }}
                    direction={{ base: "column", md: "row" }}
                    width={{ base: "auto", md: "none" }}
                    spacing={5}
                    mt="4"
                    mb="4"
                >
                    <Box
                    bg="gray.500"
                    w="65%"
                >
                    <Heading
                        size="md"
                        textAlign="center"
                    >
                        Filter
                    </Heading>
                        
                </Box>
                    
                    <Card maxW='xs' display="flex">
                        <CardBody>
                            <Link href="/">
                            <Image
                                src='/images/PRECISION-1-DAY-90PACK.png'
                                alt='Precision'
                                borderRadius='md'
                            />
                            <Stack mt='6' spacing='3'>
                            <Heading size='sm'>Precision 1 Day 90PK</Heading>
                            <Text color='orange.400' fontSize='xl'>
                                $72
                            </Text>
                            </Stack>
                            </Link>
                        </CardBody>
                    </Card>

                    <Card maxW='xs' display="flex">
                        <CardBody>
                            <Link href="/">
                            <Image
                                src='/images/PRECISION-1-DAY-90PACK.png'
                                alt='Precision'
                                borderRadius='md'
                            />
                            <Stack mt='6' spacing='3'>
                            <Heading size='sm'>Precision 1 Day 90PK</Heading>
                            <Text color='orange.400' fontSize='xl'>
                                $72
                            </Text>
                            </Stack>
                            </Link>
                        </CardBody>
                    </Card>

                    <Card maxW='xs' display="flex">
                     <CardBody>
                        <Link href="/">
                        <Image
                            src='/images/PRECISION-1-DAY-90PACK.png'
                            alt='Precision'
                            borderRadius='md'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='sm'>Precision 1 Day 90PK</Heading>
                        <Text color='orange.400' fontSize='xl'>
                            $72
                        </Text>
                        </Stack>
                        </Link>
                     </CardBody>
                    </Card>

                    {/* <Card maxW='xs' display="flex">
                     <CardBody>
                        <Link href="/">
                        <Image
                            src='/images/PRECISION-1-DAY-90PACK.png'
                            alt='Precision'
                            borderRadius='md'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='sm'>Precision 1 Day 90PK</Heading>
                        <Text color='orange.400' fontSize='xl'>
                            $72
                        </Text>
                        </Stack>
                        </Link>
                     </CardBody>
                    </Card> */}

                </Stack>
                </motion.div>
            </Container>
        </>
    )
}

export default contactlens;