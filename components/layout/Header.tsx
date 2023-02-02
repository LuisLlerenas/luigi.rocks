import { FC } from 'react';

import { HStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';

import { Section } from 'components/layout/Section';
import { InternalLink } from 'components/InternalLink';

export const HEADER_HEIGHT = '35px';

export const Header: FC = () => (
  <Section as="header" h={HEADER_HEIGHT} mt="0">
    <HStack as="nav" spacing="0">
      <InternalLink href="/" display="flex" alignItems="center">
        <Text
          fontSize="25px"
          fontWeight="bold"
          color="brand.whiteSecondary"
          display="inline"
        >
          Luis 🔥
        </Text>
      </InternalLink>
    </HStack>
  </Section>
);
