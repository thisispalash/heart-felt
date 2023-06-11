import { Html, Head, Main, NextScript } from 'next/document';
import SEO from '@/components/compounds/Head';

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <SEO />

        {/* fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link 
          rel='stylesheet' 
          href='https://fonts.googleapis.com/css2?family=Raleway+Dots:wght@400&display=swap' 
        />
        <link 
          rel='stylesheet' 
          href='https://fonts.googleapis.com/css2?family=Turret+Road:wght@200;300;400;500;700;800&display=swap' 
        />
        <link 
          rel='stylesheet' 
          href='https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap' 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
