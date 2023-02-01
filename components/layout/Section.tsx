import { FC } from 'react';
import { Flex, FlexProps } from '@chakra-ui/layout';

const SECTION_MAX_WIDTH = 800;
const SECTION_PADDING = 10;

export const Section: FC<FlexProps> = ({
  as = 'section',
  bg,
  children,
  ...props
}) => (
  <Flex as={as} justify="center" bg={bg}>
    <Flex
      align="center"
      justify="space-between"
      maxW={SECTION_MAX_WIDTH}
      width="100%"
      px={SECTION_PADDING}
      mt="50px"
      {...props}
    >
      {children}
    </Flex>
  </Flex>
);
