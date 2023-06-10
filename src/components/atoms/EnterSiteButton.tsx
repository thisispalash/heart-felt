import { Button } from "@chakra-ui/react";


export default function EnterSiteButton({ ...props }) {

  const enterSite = async () => {}

  return (
    <Button
      size='lg'
      variant='outline'
      onClick={enterSite}
      colorScheme='highlightScheme'
    >
      Enter Site
    </Button>
  );
}