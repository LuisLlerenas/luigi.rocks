import { FC } from 'react';
import { HStack } from '@chakra-ui/layout';

// components
import { Icon, IconName } from 'components/Icon';
import { IconProps, Box } from '@chakra-ui/react';
import { ExternalLink } from 'components/ExternalLink';
// constants
import { TWITTER_URL, LINKEDIN_URL, GITHUB_URL } from 'helpers/constants';

const LINKS = [
  {
    iconName: IconName.twitter,
    url: TWITTER_URL,
    name: 'twitter',
  },
  {
    iconName: IconName.github,
    url: GITHUB_URL,
    name: 'github',
  },
  {
    iconName: IconName.linkedIn,
    url: LINKEDIN_URL,
    name: 'linked in',
  },
];

interface SocialIcons {
  iconSizes?: IconProps['boxSize'];
}

export const SocialIcons: FC<SocialIcons> = ({ iconSizes = 5 }) => (
  <HStack spacing="3" as="ul" listStyleType="none">
    {LINKS.map(({ iconName, url, name }) => (
      <Box as="li" key={url}>
        <ExternalLink href={url} borderRadius="5px" hideExternalIcon>
          <Icon
            aria-label={`${name} link`}
            boxSize={iconSizes}
            color="brand.greyDarker"
            name={iconName}
            transition="0.1s ease"
            _hover={{ color: 'brand.grey' }}
          />
        </ExternalLink>
      </Box>
    ))}
  </HStack>
);
