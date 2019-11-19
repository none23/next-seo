import React, { FC } from 'react';

import JsonLd from './JsonLd';

export interface ArticleJsonLdProps {
  url: string;
  title: string;
  images: ReadonlyArray<string>;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  description: string;
  publisherName: string;
  publisherLogo: string;
}

const ArticleJsonLd: FC<ArticleJsonLdProps> = ({
  url,
  title,
  images = [],
  datePublished,
  dateModified = null,
  authorName,
  description,
  publisherName,
  publisherLogo,
}) => {
  const value = {
    '@context': 'http://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    image: images,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo,
      },
    },
    description,
  };
  return <JsonLd keyProp="jsonld-article" value={value} />;
};

export default ArticleJsonLd;
