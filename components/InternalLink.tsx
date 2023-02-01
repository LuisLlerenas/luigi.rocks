import { FC } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

interface InternalLinkProps extends Omit<ChakraLinkProps, 'href'> {
  href: NextLinkProps['href'];
}

export const GhostInternalLink: FC<
  InternalLinkProps & { isGhost: boolean }
> = ({ children, href, isGhost, ...props }) => (
  <NextLink href={href} passHref>
    <ChakraLink
      _hover={isGhost ? { textDecoration: 'none' } : undefined}
      {...props}
    >
      {children}
    </ChakraLink>
  </NextLink>
);

export const InternalLink: FC<InternalLinkProps> = (props) => (
  <GhostInternalLink
    isGhost={false}
    p="2"
    borderRadius="5px"
    _hover={{
      textDecor: 'none',
      backgroundColor: 'brand.blackSecondary',
    }}
    {...props}
  />
);
