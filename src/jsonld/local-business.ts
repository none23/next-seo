import createJsonLd from './createJsonLd';

type Address = {
  streetAddress: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode: string;
  addressCountry: string;
};

type Geo = {
  latitude: string;
  longitude: string;
};

type Rating = {
  ratingValue: string;
  ratingCount: string;
};

export interface LocalBusinessJsonLdProps {
  type: string;
  id: string;
  name: string;
  description: string;
  url: string;
  telephone?: string;
  address: Address;
  geo: Geo;
  images: string[];
  rating?: Rating;
  priceRange?: string;
}

const buildGeo = ({ latitude, longitude }: Geo) => ({
  '@type': 'GeoCoordinates',
  latitude,
  longitude,
});

const buildAddress = ({
  streetAddress,
  addressLocality,
  addressRegion,
  postalCode,
  addressCountry,
}: Address) => ({
  '@type': 'PostalAddress',
  streetAddress,
  addressLocality,
  addressRegion,
  postalCode,
  addressCountry,
});

const buildRating = ({ ratingValue, ratingCount }: Rating) => ({
  '@type': 'AggregateRating',
  ratingValue,
  ratingCount,
});

const buildLocalBusinessJsonLd = ({
  type,
  id,
  name,
  description,
  url,
  telephone,
  address,
  geo,
  images,
  rating,
  priceRange,
}: LocalBusinessJsonLdProps) => ({
  '@context': 'http://schema.org',
  '@type': type,
  '@id': id,
  description,
  url,
  telephone,
  address: address ? buildAddress(address) : undefined,
  geo: geo ? buildGeo(geo) : undefined,
  aggregateRating: rating ? buildRating(rating) : undefined,
  priceRange,
  image: images,
  name,
});

const generateKey = ({ id }: LocalBusinessJsonLdProps) =>
  `jsonld-local-business-${id}`;
export default createJsonLd(generateKey, buildLocalBusinessJsonLd);
