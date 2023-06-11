import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Link, Spacer, Text, VStack } from '@chakra-ui/react'
import WelcomeScreen from '@/components/molecules/WelcomeScreen'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <VStack 
      h='100vh' w='100vw' 
      px={12}
      spacing={4} 
      bg='background'
      color='text'
    >
      <Spacer />
      <WelcomeScreen />
      <Spacer />
    </VStack>
  )
}
