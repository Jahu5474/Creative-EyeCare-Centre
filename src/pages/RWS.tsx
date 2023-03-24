import { Container, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

const RWS = () => {
    return (
        <>
            <Container
                maxW="container.lg"
            >
                <Stack
                    display={{ base: "flex", md: "flex" }}
                    align="center"
                    justify="center"
                    gap={3}
                >
                    <Heading
                        fontSize="2xl"
                    >
                        Return, Warranty, and Shipping
                    </Heading>
                </Stack>
            </Container>
        </>
    )
}

export default RWS;