import React, { FC } from 'react';

import JsonLd from './JsonLd';

export interface ContactPoint {
  contactType: string;
  telephone: string;
  areaServed?: string | string[];
  availableLanguage?: string | string[];
  contactOption?: string | string[];
}

export interface CorporateContactJsonLdProps {
  url: string;
  contactPoint: ContactPoint[];
  logo?: string;
}

const CorporateContactJsonLd: FC<CorporateContactJsonLdProps> = ({
  url,
  logo,
  contactPoint,
}) => {
  const value = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url,
    logo,
    contactPoint: contactPoint.map(
      ({
        telephone,
        contactType,
        areaServed,
        availableLanguage,
        contactOption,
      }) =>
        JSON.stringify({
          '@type': 'ContactPoint',
          telephone,
          contactType,
          areaServed,
          availableLanguage,
          contactOption,
        }),
    ),
  };
  return <JsonLd keyProp="jsonld-corporate-contact" value={value} />;
};

export default CorporateContactJsonLd;
