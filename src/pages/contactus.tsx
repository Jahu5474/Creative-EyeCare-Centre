import React from 'react'
import { useState } from 'react'
import { Heading, FormControl, FormLabel, FormErrorMessage, FormHelperText, Container, Input, Button } from '@chakra-ui/react'

function errorMessageForm() {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

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
                <FormControl isInvalid={isError}>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                        id='email'
                        type='email'
                        value={input}
                        onChange={handleInputChange}
                    />
                    {!isError ? (
                        <FormHelperText>
                            Enter the email you'd like to receive the newsletter on.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                    <Button

                    >
                        Submit
                    </Button>
                </FormControl>
            </Container>
        </>
    )
}

export default errorMessageForm;

