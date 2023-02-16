import React from 'react';
import Navbar from '../Navbar/Navbar'
import { Divider } from '@chakra-ui/react'


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return(
        <>
        <Navbar/>
        <Divider/>
        <main>{children}</main>
        
        </>
    )
}

export default Layout;
