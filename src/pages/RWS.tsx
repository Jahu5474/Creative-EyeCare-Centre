import React from 'react';
import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import styles from '../components/TOS/TOS.module.css'

const RWS = () => {
    return (
        <>
            <Container
                maxW="container.lg"
            >
                <Stack
                    display={{ base: "flex", md: "flex" }}
                    width={{ base: "full", md: "none" }}
                    flexGrow={1}
                    align="center"
                    justify="center"
                    gap={3}
                >
                    <Heading
                        fontSize="3xl"
                        className={styles.center}
                    >
                        Return, Warranty, and Shipping
                    </Heading>
                    <Heading
                        className={styles.center}
                        fontSize="2xl"
                    >
                        Contact Lenses
                    </Heading>
                    <Text
                        className={styles.wide}
                    >
                        Single vision regular contact lenses orders are final once payments have been processed. If the prescription or product is incorrectly entered by mistake, please send us an email notification within 24 hours and we will help you correct your order. If a notification is not received within 24 hours, the customer may bring in contact lenses to our local store for an exchange if the prescription is incorrectly entered. Boxes must be sealed, unopened, and unmarked.
                    </Text>
                    <Text
                        className={styles.wide}
                    >
                        Contact lenses for astigmatism and multifocal purposes are custom-made for each individual order. As such, they are final sales and cannot be returned or exchanged.
                    </Text>
                    <Heading
                        className={styles.center}
                        fontSize="2xl"
                    >
                        Eyeglasses/Sunglasses
                    </Heading>
                    <Text
                        className={styles.wide}
                    >
                        All eyeglasses/sunglasses are final sales. Once your order has been placed, it cannot be canceled nor refunded. Customers can drop in at our local store for fitting adjustment if needed.
                    </Text>
                    <Heading
                        fontSize="3xl"
                        className={styles.center}
                    >
                        Warranty Policy
                    </Heading>
                    <Text
                        className={styles.wide}
                    >
                        Our warranty covers the manufacturer&apos;s defects on sunglasses (frames only), eyeglasses, and prescription lenses within one year of the delivery date. It does not cover damage caused by the wear and tear of everyday use, sudden force or impact, accidental damage, including but not limited to: lens scratches, loose hinges, missing screws, broken frames, detached temple tips, or detached nose pads.
                    </Text>
                    <Text
                        className={styles.wide}
                    >
                        Any cosmetic issues, such as scratches, paint chips, or marks, are not covered by warranty unless they occur straight from the box and are reported within 3 days of delivery; after 3 days they will be classified as wear and tear and be ineligible for any return or warranty claim.
                    </Text>
                    <Heading
                        fontSize="3xl"
                    >
                        Shipping Policy
                    </Heading>
                    <Text
                        className={styles.wide}
                    >
                        Orders will be shipped within BC by Canada Post&apos;s Expresspost service, FedEx, or UPS. No shipping to P.O. Box address. For in-stock products, the whole process usually takes 3-5 business days depending on the destination. For backorder products, the whole process usually takes 2-3 weeks. We will inform you if the product is on backorder. The tracking number will be provided upon request.
                    </Text>
                </Stack>
            </Container>
        </>
    )
}

export default RWS;