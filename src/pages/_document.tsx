import { Html, Head, Main, NextScript } from 'next/document';
import CustomHead from '@/components/compounds/Head';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <CustomHead />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
