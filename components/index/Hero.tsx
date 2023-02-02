import { FC } from 'react';

import { keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion'

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

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0);}
  25% { transform: scale(2) rotate(180deg);}
  50% { transform: scale(2) rotate(360deg);}
  75% { transform: scale(1) rotate(540deg);}
  100% { transform: scale(1) rotate(720deg));}
`;

const animation = `${animationKeyframes} 6s ease-in-out 1`;



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
        marginTop="15px"
      >
        <Image priority alt="Portrait of Luis" src={Luis} placeholder="blur" />
        <HeroText 
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontWeight='extrabold'
        as={motion.div}
        animation={animation}
       textAlign={"center"}
        marginTop={"15px"}>
          More To Come
          </HeroText>
        <HeroText textAlign={"center"}>👷🏽‍♂️ 🛠️ 🚧</HeroText>
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
          bgGradient='linear(-225deg,
            #231557 0%,
            #44107a 29%,
            #ff1361 67%,
            #fff800 100%)'
          backgroundSize={['200%', 'auto']}
          bgClip='text'
          fontWeight='extrabold'

        >
          Luis Llerenas
        </Heading>
        <HeroText>
        Unleashing creativity and passion for web development as a SE student at ASU. <br />
        Ready for challenging <Span color="brand.blue">internships</Span> and to make an impact with my skills in 
        front-end software engineering. <br />
        Let's build something amazing together.{' '}
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
