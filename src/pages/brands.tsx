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
                        textAlign="center"
                    >
                        Brands We Carry
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
                        <GridItem>
                            <Image src="/images/Celine-Logo.png" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Saint-Laurent-Logo.png" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Lindberg.png" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Chloe-Logo.png" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Bottega-Veneta-Logo.png" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Chanel-Logo.png" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Givenchy-Logo.png" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Dolce-And-Gabbana-Logo.png" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/RayBan-Logo.png" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Oakely-logo.png" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Dior-logo.png" />
                        </GridItem>
                    </Grid>
                </Stack>
            </Container>
        </>

    )
}

export default Brands;