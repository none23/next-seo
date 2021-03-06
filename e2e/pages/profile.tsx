import React from 'react';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import Links from '../components/links';

export default () => (
  <>
    <NextSeo
      title="Profile Page Title"
      description="Description of profile page"
      openGraph={{
        title: 'Open Graph Profile Title',
        description: 'Description of open graph profile',
        url: 'https://www.example.com/@firstlast123',
        type: 'profile',
        profile: {
          firstName: 'First',
          lastName: 'Last',
          username: 'firstlast123',
          gender: 'male',
        },
        // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next
        images: [
          {
            url: 'https://www.test.ie/og-image-firstlast123-01.jpg',
            width: 850,
            height: 650,
            alt: 'Og Image Alt firstlast123 A',
          },
          {
            url: 'https://www.test.ie/og-image-firstlast123-02.jpg',
            width: 950,
            height: 850,
            alt: 'Og Image Alt firstlast123 B',
          },
          {
            url: 'https://www.test.ie/og-image-firstlast123-03.jpg',
            width: 600,
            height: 400,
            alt: 'Og Image Alt firstlast123 C',
          },
          {
            url: 'https://www.test.ie/og-image-firstlast123-04.jpg',
            width: 400,
            height: 400,
            alt: 'Og Image Alt firstlast123 D',
          },
        ],
        site_name: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
    <h1>Profile Page SEO</h1>
    <Links />
    <SocialProfileJsonLd
      type="Person"
      url="http://www.your-site.com"
      name="your name"
      sameAs={[
        'http://www.facebook.com/your-profile',
        'http://instagram.com/yourProfile',
        'http://www.linkedin.com/in/yourprofile',
        'http://plus.google.com/your_profile',
      ]}
    />
  </>
);
