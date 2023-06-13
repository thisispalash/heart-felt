import '@/styles/base.css';
import '@/styles/fonts.css';

import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/theme'

import Head from '@/components/compounds/Head';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head />
      <Component {...pageProps} />
    </ChakraProvider>
  );      
}
