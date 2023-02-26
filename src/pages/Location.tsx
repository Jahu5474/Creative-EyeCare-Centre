import React from 'react';
import { NextPage } from 'next';
import {Stack, Container, Box, Button, Flex, Heading} from '@chakra-ui/react'
import Information from '../components/Information/Information'

const Location: NextPage = () =>(
    <>
        <Container
            maxW="container.lg"
            minH="60vh"
            centerContent
        >
            <Stack
                display={{base:"flex", md:"flex"}}
                direction={{base:"column", md:"row"}}
                flexGrow={1}
                mb={4}
                mt={4}
                align="center"
            >
            <Box 
                display="flex" 
                width={{base:"xs", md:"auto"}}
            >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.5532390364615!2d-123.12787578411944!3d49.284862178536926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867180f30bcd5d%3A0xf5cc64d2de33a4cf!2s1120%20Robson%20St%2C%20Vancouver%2C%20BC%20V6E%201B2!5e0!3m2!1sen!2sca!4v1677121077043!5m2!1sen!2sca" width="800" height="450" loading="lazy"></iframe>
            </Box>
            </Stack>
            <Information/>
        </Container>
    </>
);

export default Location;