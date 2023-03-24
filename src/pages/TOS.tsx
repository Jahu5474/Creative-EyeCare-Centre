import React from 'react'
import { Container, Stack, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import styles from '../components/TOS/TOS.module.css';

const TOS = () => {
    return (
        <>
            <Container
                maxW="container.lg"
                h="100vh"
            >
                <Stack
                    display={{ base: "flex", md: "flex" }}
                    width={{ base: "full", md: "none" }}
                    direction="column"
                    justify="center"
                    align="center"
                    gap="3"
                >
                    <Heading

                        mt={4}
                    >
                        Terms of Conditions
                    </Heading>
                    <Heading
                        as="h2"
                        fontSize="2xl"
                        className={styles.center}
                    >
                        Do I Need a prescription to place an order?
                    </Heading>
                    <Text
                        className={styles.wide}

                    >
                        If you are our regular/repeat contact lens customers, you don&apos;t need to provide your prescription paper to place an order on our website since we already have your prescription on paper file. For new customers, yes, we highly recommend ordering from a valid, updated prescription. Getting a comprehensive eye exam at least every two years ensures your eyes are healthy and the eyewear you purchase is suited to your vision needs.
                    </Text>
                    <Heading
                        as="h2"
                        fontSize="2xl"
                        className={styles.center}

                    >
                        Can I use my eyeglasses prescription to order contact lenses?
                    </Heading>
                    <Text

                        className={styles.wide}
                    >
                        Eyeglasses and contact lenses require two different prescriptions, for a couple of reasons:
                    </Text>
                    <UnorderedList
                        className={styles.wide}

                    >
                        <ListItem
                            mb={4}
                        >
                            A contact lens prescription will include the brand of lens your doctor has determined fits you well. The contact lens material affects the way it fits your cornea, and matching measurements such as base curve (BC) and diameter (DIA) from one lens to another does not guarantee the same fit.
                        </ListItem>
                        <ListItem

                        >
                            Also, the corrective power on your contact lens prescription will differ from your glasses prescription. This is because a contact lens isn&apos;t positioned at the same distance as glasses.
                        </ListItem>
                    </UnorderedList>
                    <Text
                        className={styles.wide}
                    >
                        If you&apos;re unsure whether your prescription is for glasses or contact lenses, you can contact us at 604-423-3603 for more details.
                    </Text>

                    <Heading
                        fontSize="2xl"
                        className={styles.center}
                    >
                        How can I claim my rebate for the contact lenses I purchased?
                    </Heading>
                    <Text
                        className={styles.wide}
                    >
                        Most contact lens orders come with online/mail-in rebates if you order half a year supplies or more. If eligible, the rebate form will be emailed/mailed to you together with the invoice once payment has been processed.
                    </Text>
                </Stack>
            </Container>

        </>
    )
}

export default TOS;
