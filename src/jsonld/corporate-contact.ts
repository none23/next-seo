import createJsonLd from './createJsonLd';

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

const buildCorporateContactJsonLd = ({
  url,
  logo,
  contactPoint,
}: CorporateContactJsonLdProps) => ({
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
    }) => ({
      '@type': 'ContactPoint',
      telephone,
      contactType,
      areaServed,
      availableLanguage,
      contactOption,
    }),
  ),
});

const generateKey = ({ url }: CorporateContactJsonLdProps) =>
  `jsonld-corporate-contact-${url}`;

export default createJsonLd(generateKey, buildCorporateContactJsonLd);
