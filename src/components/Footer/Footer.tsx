import {
    Button,
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    Input,
    Stack,
    Text,
    Heading,
    Box,
    SimpleGrid
  } from '@chakra-ui/react'
  import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
  
  export const Footer = () => (
<Container>
<SimpleGrid minChildWidth='120px' spacing='20px'>
  <Box height='80px'>
    <Text>About Us</Text>
  </Box>
  <Box height='80px'>
    <Text>Information</Text>
  </Box>
  <Box height='80px'>
    <Text>Contact Us</Text>
  </Box>
</SimpleGrid>
</Container>

  )

export default Footer;
