import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/layout';

// layout components
import { Footer } from 'components/layout/Footer';
import { Header } from 'components/layout/Header';

const META_TAGS = {
  title: 'Luis Llerenas | Software engineer student.',
  description: 'Personal web page for luis llerenas',
};

export const Container: FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="follow, index" />
        <title>{META_TAGS.title}</title>
        <meta name="description" content={META_TAGS.description} />
      </Head>

      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </>
  );
};
