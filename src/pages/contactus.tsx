import React from 'react'
import { useState } from 'react'
import { Heading, FormControl, FormLabel, FormErrorMessage, FormHelperText, Container, Input, Button, Text } from '@chakra-ui/react'

function errorMessageForm() {

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
        if (email.email === "") {
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
                <form onSubmit={onSubmit} >
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                        id='email'
                        type='email'
                        required
                    />
                    <Text color="red">
                        {error}
                    </Text>

                    <Button
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </Container>
        </>
    )
}

export default errorMessageForm;

