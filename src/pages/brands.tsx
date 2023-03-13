import React from 'react'
import { Heading, Text, Flex, Container, Stack, Grid, GridItem, Image } from '@chakra-ui/react'

const Brands = () => {
    return (
        <>
            <Container
                maxW="container.lg"
            >
                <Stack>
                    <Heading
                        size="lg"
                        mt={4}
                        mb={4}
                    >
                        Brands We Carry:
                    </Heading>
                    <Grid
                        templateColumns={{
                            sm: "repeat(1, 1fr)",
                            md: "repeat(1, 1fr)",
                            lg: "repeat(3, 1fr)"
                        }}
                        gap={6}

                    >
                        <GridItem>
                            <Image src="/images/s1-10.png" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Tom-Ford-logo.png" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Prada-Logo.png" />
                        </GridItem>
                    </Grid>
                </Stack>
            </Container>
        </>

    )
}

export default Brands;