import { Link } from '@chakra-ui/react';



export default function ConnectWalletButton({ }) {

  const connectWallet = async () => {
  }

  // console.log(window)

  return (
    <Link 
      href={''}
      onClick={connectWallet}
    >
      connect wallet
    </Link>
  );
}