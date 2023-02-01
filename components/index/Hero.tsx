import { FC } from 'react';

// components
import Image from 'next/image';
import { Box, Heading, TextProps, VStack, Stack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';

import { Section } from 'components/layout/Section';
import { SocialIcons } from 'components/SocialIcons';
import { Span } from 'components/Span';

// images
import Luis from '/public/images/Luigi.png';

import { HEADER_HEIGHT } from 'components/layout/Header';
import { FOOTER_HEIGHT } from 'components/layout/Footer';

const HERO_MIN_HEIGHT = 550;

export const Hero: FC = () => (
  <Section
    maxW="1000px"
    minHeight={['450px', null, '450px', HERO_MIN_HEIGHT]}
    bg="brand.heroBackground"
    justify="center"
    position="relative"
    mt="0"
    aria-label="Hero"
    h={`calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`}
  >
    <Stack
      align="center"
      position="relative"
      direction={['column-reverse', null, 'row']}
      spacing={[0, '25px', '40px', '60px']}
      pt={[10, null, 0]}
    >
      {/* hero image */}
      <Box
        display="block"
        position="relative"
        width={['150px', '200px', '200px', '250px']}
        minWidth={['150px', '200px', '200px', '250px']}
      >
        <Image priority alt="Portrait of Luis" src={Luis} placeholder="blur" />
      </Box>

      {/* hero text */}
      <VStack
        spacing="20px"
        align="baseline"
        maxW={['450px', '500px', '500px', null]}
      >
        <Heading
          color="white"
          as="h1"
          fontSize={['60px', '4xl']}
          lineHeight={['70px', '85px']}
        >
          Luis Llerenas
        </Heading>
        <HeroText>
          Software engineer student looking for{' '}
          <Span color="brand.blue">internships</Span>
        </HeroText>
        <SocialIcons />
      </VStack>
    </Stack>
  </Section>
);

const HeroText: FC<TextProps> = (props) => (
  <Text
    color="brand.grey"
    fontWeight="medium"
    fontSize={['16px', null, '20px']}
    {...props}
  />
);
