import { HStack, Heading, Spacer, Text, VStack } from '@chakra-ui/react';
import EnterSiteButton from '@/components/atoms/EnterSiteButton';
import ConnectWalletButton from '@/components/atoms/ConnectWalletButton';


export default function WelcomeScreen({ }) {

  return (
    <VStack spacing={3} h='full' w='full'>
      <Heading 
        w='full'
        pt={8} px={12}
        color='focus' 
        opacity={0.7}
        fontSize='6xl'
        textAlign='left'
        position='absolute'
        fontFamily='displayFitted'
      >
        heart-felt <br />
        productions <br />
        inc.
      </Heading>
      <Spacer />
      <EnterSiteButton />
      <HStack spacing={1}>
        <Text>or</Text>
        <ConnectWalletButton />
      </HStack>
      <Spacer />
    </VStack>
  );
}