import { FC } from 'react';
import { Text, VisuallyHidden } from '@chakra-ui/react';

// components
import { Section } from 'components/layout/Section';
import { SocialIcons } from 'components/SocialIcons';
// images
import { HiddenFromScreenReader } from 'components/HiddenFromScreenReader';

export const FOOTER_HEIGHT = '60px';

export const Footer: FC = () => (
  <Section
    as="footer"
    h={FOOTER_HEIGHT}
    bg="brand.blackSecondary"
    mt="0"
    position="relative"
  >
    <Text flex="1" fontSize="sm" color="brand.grey">
      Made with <HiddenFromScreenReader>🔥</HiddenFromScreenReader>
      <VisuallyHidden>Passion</VisuallyHidden>
    </Text>
    <SocialIcons />
  </Section>
);
