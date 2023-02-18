import React from 'react';
import Navbar from '../Navbar/Navbar'
import { Divider } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Footer from '../Footer/Footer'


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return(
        <>
        <Navbar/>
        <Divider/>
        <main>{children}</main>
        <Footer/>
        
        
        </>
    )
}

export default Layout;
