import createJsonLd from '../utils/createJsonld';

export interface SocialProfileJsonLdProps {
  type: string;
  name: string;
  url: string;
  sameAs: string[];
}

const buildSocialProfileJsonLd = ({
  type,
  name,
  url,
  sameAs = [],
}: SocialProfileJsonLdProps) => ({
  '@context': 'http://schema.org',
  '@type': type,
  name,
  url,
  sameAs,
});

const generateKey = ({ url }: SocialProfileJsonLdProps) =>
  `jsonld-social-${url}`;

export default createJsonLd(generateKey, buildSocialProfileJsonLd);
