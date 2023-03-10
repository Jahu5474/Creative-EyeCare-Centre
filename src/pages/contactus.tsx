import React from 'react'
import { useState } from 'react'
import { Heading, FormControl, FormLabel, FormErrorMessage, FormHelperText, Container, Input, Button, Text, Stack, Flex, Textarea } from '@chakra-ui/react'

function ContactUs() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted")
    }
    const [email, setEmail] = useState({
        email: ''
    });

    const [error, setError] = useState('')

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (error) setError("");
        if (email.email == "") {
            setError("Please Enter your Email")
            return;
        }
    }

    return (
        <>
            <Container
                maxW="container.lg"
                centerContent
            >
                <Heading
                    size="xl"
                    mt={4}
                    mb={4}
                >
                    Send Us A Message
                </Heading>
                <Text
                    width={{ base: "sm", md: "container.sm" }}
                    fontSize="lg"
                    fontWeight="700"
                    textAlign="center"
                    mb={4}
                >
                    If you have any concerns or questions, please do not hesitate and contact us via email or phone, or by submitting the form below.
                </Text>
                <form onSubmit={onSubmit}>

                    <FormControl
                        display="flex"
                        justifyContent="space-between"
                        width={{ base: "sm", md: "auto" }}
                    >
                        <Input
                            id='firstName'
                            type='text'
                            placeholder='First Name'
                            required
                            _placeholder={{
                                color: 'gray.500'
                            }}
                            _hover={{
                                bg: "white",
                                border: "1px solid",
                                borderColor: "blue.500"
                            }}
                            _focus={{
                                outline: "none",
                                bg: "white",
                                borderColor: "blue.500"
                            }}
                            bg="gray.50"
                        />

                        <Input
                            id='lastName'
                            type='text'
                            placeholder='Last Name'
                            required
                            _placeholder={{
                                color: 'gray.500'
                            }}
                            _hover={{
                                bg: "white",
                                border: "1px solid",
                                borderColor: "blue.500"
                            }}
                            _focus={{
                                outline: "none",
                                bg: "white",
                                borderColor: "blue.500"
                            }}
                            bg="gray.50"
                        />

                    </FormControl>
                    <FormControl
                        mt={4}
                        mb={4}
                        width={{ base: "sm", md: "auto" }}
                    >

                        <Input
                            id='email'
                            type='email'
                            placeholder='Email'
                            width="100%"
                            required
                            _placeholder={{
                                color: 'gray.500'
                            }}
                            _hover={{
                                bg: "white",
                                border: "1px solid",
                                borderColor: "blue.500"
                            }}
                            _focus={{
                                outline: "none",
                                bg: "white",
                                borderColor: "blue.500"
                            }}
                            bg="gray.50"
                        />

                        <Input
                            id='subject'
                            type='text'
                            placeholder='Subject'
                            width='100%'
                            mt={4}
                            _placeholder={{
                                color: 'gray.500'
                            }}
                            _hover={{
                                bg: "white",
                                border: "1px solid",
                                borderColor: "blue.500"
                            }}
                            _focus={{
                                outline: "none",
                                bg: "white",
                                borderColor: "blue.500"
                            }}
                            bg="gray.50"
                        />

                        <Textarea
                            placeholder='Your concerns or questions...'
                            mt={4}
                            _placeholder={{
                                color: 'gray.500'
                            }}
                            _hover={{
                                bg: "white",
                                border: "1px solid",
                                borderColor: "blue.500"
                            }}
                            _focus={{
                                outline: "none",
                                bg: "white",
                                borderColor: "blue.500"
                            }}
                            bg="gray.50"
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        mb={4}
                        variant='outline'
                        _hover={{
                            color: "orange.400",
                            border: "1px solid orange"
                        }}
                    >
                        Submit
                    </Button>
                </form>


            </Container>
        </>
    )
}

export default ContactUs;

