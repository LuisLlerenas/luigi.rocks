import { FC } from 'react';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface ExternalLink extends ChakraLinkProps {
  hideExternalIcon?: boolean;
}

export const ExternalLink: FC<ExternalLink> = ({
  children,
  hideExternalIcon = false,
  ...props
}) => (
  <ChakraLink color="brand.blueLight" {...props} isExternal>
    {children}
    {!hideExternalIcon && ' '}
    {!hideExternalIcon && <ExternalLinkIcon mx="2px" />}
  </ChakraLink>
);
