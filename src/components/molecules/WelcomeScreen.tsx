import { HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import EnterSiteButton from '@/components/atoms/EnterSiteButton';
import ConnectWalletButton from '@/components/atoms/ConnectWalletButton';


export default function WelcomeScreen({ }) {

  return (
    <VStack spacing={4} h='full'>
      <Spacer />
      <EnterSiteButton />
      <HStack spacing={2}>
        <Text>or</Text>
        <ConnectWalletButton />
      </HStack>
      <Spacer />
    </VStack>
  );
}