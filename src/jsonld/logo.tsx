import React, { FC } from 'react';

import JsonLd from './JsonLd';

export interface LogoJsonLdProps {
  logo: string;
  url: string;
}

const LogoJsonLd: FC<LogoJsonLdProps> = ({ url, logo }) => {
  const value = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    url,
    logo,
  };

  return <JsonLd keyProp="jsonld-logo" value={value} />;
};

export default LogoJsonLd;
