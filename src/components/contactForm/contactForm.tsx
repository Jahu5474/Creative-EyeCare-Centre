import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    useToast,
    Container,
} from "@chakra-ui/react";
import formState from '../contactForm/formState';
import { useRecoilState } from "recoil";
import Link from "next/link";

const ContactForm = () => {
    const [formData, setFormData] = useRecoilState(formState);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            to: "juhynjuhn@gmail.com",
            from: formData.email,
            subject: "New message from contact form",
            html: `<p>Name: ${formData.name}</p>
                 <p>Email: ${formData.email}</p>
                 <p>Message: ${formData.message}</p>`,
        };

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (res.status === 200) {
                alert("Your message was sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                alert("There was an error sending your message. Please try again.");
            }
        } catch (err) {
            console.error(err);
            alert("There was an error sending your message. Please try again.");
        }
    };



    return (
        <>
            <Container
                maxW="container.lg"
            >
                <form onSubmit={onSubmit}>
                    <FormControl id="name" mb={4} mt={4}>
                        <FormLabel fontWeight="bold">Name:</FormLabel>
                        <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </FormControl>
                    <FormControl id="email" mb={4}>
                        <FormLabel fontWeight="bold">Email:</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </FormControl>
                    <FormControl id="message" mb={4}>
                        <FormLabel fontWeight="bold">Message:</FormLabel>
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                    </FormControl>
                    <Link href="mailto:juhynjuhn@gmail.com">
                        <Button>Submit</Button>
                    </Link>
                </form>
            </Container>

        </>

    )
};


export default ContactForm;
