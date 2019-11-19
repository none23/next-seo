import createJsonLd from '../utils/createJsonld';

export interface LogoJsonLdProps {
  logo: string;
  url: string;
}

const buildLogoJsonLd = ({ url, logo }: LogoJsonLdProps) => ({
  '@context': 'http://schema.org',
  '@type': 'Organization',
  url,
  logo,
});

export default createJsonLd('jsonld-logo', buildLogoJsonLd);
