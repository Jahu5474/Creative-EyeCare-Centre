import type { AppProps } from 'next/app'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../chakra/theme'
import Layout from '../components/Layout/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>

      
  )
  
}

export default App;
