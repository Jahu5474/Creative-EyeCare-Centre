import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    useToast,
    Container,
    Heading,
    Stack,
    Text,
    Box
} from "@chakra-ui/react";
import formState from '../contactForm/formState';
import { useRecoilState } from "recoil";
import Link from "next/link";

const ContactForm = () => {
    function callButton() {
        const Number = "604-423-3603"

        function handleClick() {
            window.location.href = `tel:${Number}`
        }
    }


    return (
        <>
            <Container
                maxW="container.lg"
                minH="57vh"
                centerContent
            >
                <Heading
                    textAlign="center"
                    size="lg"
                    mt={4}
                >
                    Send Us a Message
                </Heading>
                <Stack
                    display={{ base: "flex", md: "flex" }}
                    direction={{ base: "column", md: "column" }}
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                    minH="50vh"
                >
                    <Text
                        fontSize="lg"
                        fontWeight="500"
                    >
                        If you have any questions or comments, please contact us via email or phone
                    </Text>
                    <Link href="mailto:info@creativeeyecare.com">
                        <Button
                            variant="navbar"

                        >
                            Send us a Email!
                        </Button>
                    </Link>
                    <Button >
                        (604)423-3603
                    </Button>

                </Stack>





            </Container>

        </>

    )
}




export default ContactForm;
