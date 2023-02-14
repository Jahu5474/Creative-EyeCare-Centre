import { Container, Flex, Image, Heading, Stack, Box, Menu, MenuButton, IconButton, MenuList, MenuItem, Button, Text } from '@chakra-ui/react';
import React from 'react';
import Link from "next/link"
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from '../theme-toggle-button/theme-toggle-button';



function Navbar (){
    return(
    <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        align="center"
    >
            <Flex align="center" mr={4}>
                <Heading as="h1" size="lg">
                    <Link href="/">
                        Creative <Text as="span" color="orange.400">Eyecare</Text> Centre
                    </Link>
                </Heading>
            </Flex>
        <Stack
            direction={{base:"column", md:"row"}}
            display={{base:"none", md:"flex"}}
            width={{base:"full", md:"auto"}}
            alignItems="center"
            flexGrow={1}
            justify="center"
        >
            <Link href="/brands">
                <Button size="sm" variant="navbar">
                    Brands
                </Button>
            </Link>

            <Link href="/contactlens">
                <Button size="sm" variant="navbar">
                    Contact Lens
                </Button>
            </Link>

            <Link href="/location">
                <Button size="sm" variant="navbar">
                    Location
                </Button>
            </Link>

            <Link href="/contactus">
                <Button size="sm" variant="navbar">
                    Contact Us
                </Button>
            </Link>

            <Link href="/my-acount">
                <Button size="sm" variant="navbar">
                    My Account
                </Button>
            </Link>
            
        </Stack>
        <Box flex={1} align="right">
            <ThemeToggleButton/>
            <Box ml={2} display={{base:"inline-block", md:"none"}}>
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
                        <Link href="location" passHref>
                        <MenuItem >
                            Location
                        </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    </Container>
        


    )
};

export default Navbar;