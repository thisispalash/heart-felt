import { Button, Link } from '@chakra-ui/react';



export default function ConnectWalletButton({ }) {

  const connectWallet = async () => {
    console.log('connect wallet coming soon..');
    // TODO toast
  }

  return (
    <Button
      py={1}
      color='text'
      variant='link'
      
      borderRadius={0}
      borderColor='text'
      borderBottom='1px solid'

      _hover={{
        color: 'focus',
        border: 'none',
        textDecoration: 'none',
      }}

      onClick={connectWallet}
    >
      connect wallet
    </Button>
  );
}