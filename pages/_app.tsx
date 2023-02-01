import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
// helpers
import { theme } from 'helpers/theme';
// styles
import 'styles/global.css';
// lib
import { useEasterEgg } from 'helpers/useEasterEgg';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEasterEgg();

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
