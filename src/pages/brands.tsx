import React from 'react'
import { NextPage } from 'next';
import { Heading, Text, Flex, Container, Stack, Grid, GridItem, Image } from '@chakra-ui/react'

const Brands: NextPage = () => {
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
                            <Image src="/images/Gucci-logo.png" alt="Gucci" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Tom-Ford-logo.png" alt="Tom" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Prada-Logo.png" alt="Prada" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Celine-Logo.png" alt="Celine" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Saint-Laurent-Logo.png" alt="Saint" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Lindberg.png" alt="Lindberg" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Chloe-Logo.png" alt="Chloe" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Bottega-Veneta-Logo.png" alt="Bottega" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Chanel-Logo.png" alt="Chanel" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Givenchy-Logo.png" alt="Givenchy" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Dolce-And-Gabbana-Logo.png" alt="Dolce" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/RayBan-Logo.png" alt="RayBan" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Oakely-logo.png" alt="Oakely" />
                        </GridItem>
                        <GridItem>
                            <Image src="/images/Dior-logo.png" alt="Dior" />
                        </GridItem>
                    </Grid>
                </Stack>
            </Container>
        </>

    )
}

export default Brands;
