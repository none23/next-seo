import React from 'react';
import { SocialProfileJsonLd } from 'next-seo';
import Links from '../components/links';

export default () => (
  <>
    <h1>Profiles Page SEO</h1>
    <Links />
    <SocialProfileJsonLd
      type="Person"
      url="http://www.your-site.com"
      name="Your Name"
      sameAs={[
        'http://www.facebook.com/your-profile',
        'http://instagram.com/yourProfile',
        'http://www.linkedin.com/in/yourprofile',
        'http://plus.google.com/your_profile',
      ]}
    />
    <SocialProfileJsonLd
      type="Person"
      url="http://www.someone-else.com"
      name="Someone Else"
      sameAs={[
        'http://www.facebook.com/someone-else',
        'http://instagram.com/someoneElse',
        'http://www.linkedin.com/in/someoneelse',
        'http://plus.google.com/someone_else',
      ]}
    />
  </>
);
