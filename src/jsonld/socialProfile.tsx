import React, { FC } from 'react';

import JsonLd from './JsonLd';

export interface SocialProfileJsonLdProps {
  type: string;
  name: string;
  url: string;
  sameAs: string[];
}

const SocialProfileJsonLd: FC<SocialProfileJsonLdProps> = ({
  type,
  name,
  url,
  sameAs = [],
}) => {
  const value = {
    '@context': 'http://schema.org',
    '@type': type,
    name,
    url,
    sameAs,
  };

  return <JsonLd keyProp="jsonld-social" value={value} />;
};

export default SocialProfileJsonLd;
