import React from 'react';
import Navbar from '../Navbar/Navbar'
import { Divider, Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Footer from '../Footer/Footer'
import Information from '../Information/Information'


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return(
        <>
        <Navbar/>
        <Divider/>
        <main>{children}</main>
        <Information/>
        <Footer/>
        </>
    )
}

export default Layout;
