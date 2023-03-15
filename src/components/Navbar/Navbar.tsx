import { Container, Flex, Heading, Stack, Box, Menu, MenuButton, IconButton, MenuList, MenuItem, Button, Text } from '@chakra-ui/react';
import React from 'react';
import Link from "next/link"
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from '../theme-toggle-button/theme-toggle-button';
import AuthButton from './AuthButton'
import AuthModal from '../Modal/Auth/AuthModal'
import { auth } from '../../firebase/clientApp'
import { useAuthState } from 'react-firebase-hooks/auth'


function Navbar() {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Container
            display="flex"
            p={2}
            maxW="container.lg"
            wrap="wrap"
            align="center"
        >
            <Flex align="center" mr={4}>
                <Heading as="h1" size={{ base: "sm", md: "md" }}>
                    <Link href="/">
                        Creative <Text as="span" color="orange.400">Eyecare</Text> Centre
                    </Link>
                </Heading>
            </Flex>
            <Stack
                direction={{ base: "column", md: "row" }}
                display={{ base: "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
                justify="center"
            >
                <Link href="/brands">
                    <Button
                        size="sm"
                        variant="navbar"
                        _hover={{
                            color: "orange.400"
                        }}
                    >
                        Brands
                    </Button>
                </Link>

                <Link href="/contactlens">
                    <Button
                        size="sm"
                        variant="navbar"
                        _hover={{
                            color: "orange.400"
                        }}
                    >
                        Contact Lens
                    </Button>
                </Link>

                <Link href="/Location">
                    <Button
                        size="sm"
                        variant="navbar"
                        _hover={{
                            color: "orange.400"
                        }}
                    >
                        Location
                    </Button>
                </Link>

                <Link href="/contactus">
                    <Button
                        size="sm"
                        variant="navbar"
                        _hover={{
                            color: "orange.400"
                        }}
                    >
                        Contact Us
                    </Button>
                </Link>
                <AuthModal />
                <AuthButton user={user} />

            </Stack>
            <Box flex={1} align="right">
                <ThemeToggleButton />
                <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            <Link href="/brand" passHref>
                                <MenuItem >
                                    Brands
                                </MenuItem>
                            </Link>

                            <Link href="contactlens" passHref>
                                <MenuItem >
                                    Contact Lens
                                </MenuItem>
                            </Link>

                            <Link href="Location" passHref>
                                <MenuItem >
                                    Location
                                </MenuItem>
                            </Link>

                            <Link href="contactus" passHref>
                                <MenuItem >
                                    Contact Us
                                </MenuItem>
                            </Link>
                            <MenuItem>
                                <AuthModal />
                                <AuthButton user={user} />
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </Container>



    )
};

export default Navbar;