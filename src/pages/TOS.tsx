import React from 'react'
import { Container, Stack, Heading, Text } from '@chakra-ui/react'

const TOS = () => {
    return (
        <>
            <Container
                maxW="container.lg"
            >
                <Stack
                    display={{ base: "flex", md: "flex" }}
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <Heading
                        fontSize="2xl"
                        mt={4}
                        mb={4}
                    >
                        Terms of Conditions
                    </Heading>
                    <Heading
                        as="h2"
                        fontSize="2xl"
                    >
                        Do I Need a prescription to place an order?
                    </Heading>
                    <Text
                        w="70%"
                    >
                        If you are our regular/repeat contact lens customers, you don&apos;t need to provide your prescription paper to place an order on our website since we already have your prescription on paper file. For new customers, yes, we highly recommend ordering from a valid, updated prescription. Getting a comprehensive eye exam at least every two years ensures your eyes are healthy and the eyewear you purchase is suited to your vision needs.
                    </Text>
                </Stack>
            </Container>

        </>
    )
}

export default TOS;
