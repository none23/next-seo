import React from 'react';
import { LocalBusinessJsonLd } from 'next-seo';

export default () => (
  <>
    <h1>Blog headline</h1>

    <LocalBusinessJsonLd
      type="Store"
      id="http://davesdeptstore.example.com"
      name="Dave's Department Store"
      description="Dave's latest department store in San Jose, now open"
      url="http://www.example.com/store-locator/sl/San-Jose-Westgate-Store/1427"
      telephone="+14088717984"
      address={{
        streetAddress: '1600 Saratoga Ave',
        addressLocality: 'San Jose',
        addressRegion: 'CA',
        postalCode: '95129',
        addressCountry: 'US',
      }}
      geo={{
        latitude: '37.293058',
        longitude: '-121.988331',
      }}
      images={[
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg',
      ]}
    />
  </>
);
