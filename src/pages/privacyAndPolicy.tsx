import React from 'react';
import { Container, Heading, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
import styles from '../components/TOS/TOS.module.css'

const PAP = () => {
    return (
        <>
            <Container
                maxW="container.lg"
            >
                <Stack
                    display={{ base: "flex", md: "flex" }}
                    width={{ base: "full", md: "none" }}
                    flexGrow={1}
                    justify="center"
                    align="center"
                    gap={3}
                >
                    <Heading
                        className={styles.center}
                        fontSize="2xl"
                        mt={4}
                    >
                        Privacy and Policy
                    </Heading>
                    <Text
                        className={styles.wide}
                    >
                        This Privacy Policy is to inform you of what personal data our company collects from you when you visit our website or use our services. This document will further explain why we collect it, and what we do with it. Your personal data refers to any information relating to you, specifically with regard to your name and contact details including your home address, telephone number, and email address.
                    </Text>
                    <Heading
                        className={styles.center}
                        fontSize="2xl"
                    >
                        What personal data do we collect?
                    </Heading>
                    <Text
                        className={styles.wide}
                    >
                        When you order products on our website, we will ask you to provide us with complete and accurate personal data. This includes your name, telephone number, e-mail address, prescription, and the details of your payment method such as a credit card, though we do not store the details of any card after the first order has been processed.
                    </Text>
                    <Heading
                        className={styles.center}
                        fontSize="2xl"
                    >
                        How do we use the personal data we collect?
                    </Heading>
                    <Text
                        className={styles.wide}
                    >
                        We use your provided personal data in order to fulfill your order placed on our website, to process sales, returns, or replacement orders. Your personal data will only be used by our store; we will never share your personal data with other companies.
                    </Text>
                    <Heading
                        className={styles.center}
                        fontSize="2xl"
                    >
                        How do we protect personal data?
                    </Heading>
                    <Text
                        className={styles.wide}
                    >
                        We have measures in place to protect your personal data against unauthorized access, use, or disclosure, including without limitation:
                    </Text>
                    <UnorderedList
                        className={styles.wide}
                    >
                        <ListItem>
                            We implement and maintain sophisticated technical measures to ensure that your personal data is recorded and processed in complete confidentiality and security.
                        </ListItem>
                        <ListItem>
                            We implement and maintain appropriate restrictions on access to your personal data, and monitoring of the access, use, and transfer of personal data.
                        </ListItem>
                        <ListItem>
                            All employees who have access to your personal data are required to enter into nondisclosure or similar agreements, which impose obligations for them to comply with our data privacy and confidentiality requirements.
                        </ListItem>
                    </UnorderedList>
                </Stack>
            </Container>
        </>
    )
}

export default PAP;