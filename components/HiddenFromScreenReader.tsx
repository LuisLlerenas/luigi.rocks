import { Box, BoxProps } from '@chakra-ui/layout';
import { FC } from 'react';

export const HiddenFromScreenReader: FC<BoxProps> = (props) => (
  <Box as="span" aria-hidden {...props} />
);
